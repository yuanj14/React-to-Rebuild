import { useActionState } from 'react'

/**
 * ========== React 19 useActionState ==========
 *
 * 【核心特点】
 * 1. 用于管理表单 action 的状态（成功/失败/loading）
 * 2. 返回 [state, formAction, isPending]
 * 3. action 函数接收 (previousState, formData) 参数
 * 4. 可以返回新状态，用于 UI 反馈
 *
 * 【与 useFormStatus 的区别】
 * | 特性           | useActionState              | useFormStatus             |
 * |----------------|----------------------------|---------------------------|
 * | 返回值         | [state, action, isPending] | { pending, data, ... }    |
 * | 状态管理       | 可自定义状态（成功/失败/数据） | 只有 pending 状态          |
 * | 使用位置       | 可在任何组件中使用          | 必须在 <form> 子组件中     |
 * | 适用场景       | 需要显示操作结果（成功/错误） | 只需显示 loading 状态      |
 */

// ========== 错误类型 ==========
class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

// ========== 后端请求 ==========
async function fetchHelloPost(name: string) {
  const response = await fetch('/api/hello', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  })

  if (!response.ok) {
    throw new ApiError(
      response.status,
      `请求失败: ${response.status} ${response.statusText}`,
    )
  }

  return response.json()
}

// ========== 状态类型 ==========
type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
  data?: unknown
}

// 初始状态
const initialState: FormState = {
  status: 'idle',
  message: '',
}

// ========== Action 函数 ==========
// 接收 previousState 和 formData，返回新状态
async function submitAction(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = formData.get('name') as string

  try {
    const data = await fetchHelloPost(name)
    return {
      status: 'success',
      message: `提交成功！欢迎, ${name}`,
      data,
    }
  } catch (error) {
    // 统一在最外层处理错误
    console.error('提交失败:', error)
    return {
      status: 'error',
      message: error instanceof Error ? error.message : '未知错误',
    }
  }
}

// ========== 组件 ==========
export function ActionStateDemo() {
  // useActionState 返回: [state, formAction, isPending]
  const [state, formAction, isPending] = useActionState(
    submitAction,
    initialState,
  )

  return (
    <form action={formAction}>
      <h3>useActionState 示例</h3>

      <label>
        姓名：
        <input type="text" name="name" defaultValue="guodd" required />
      </label>

      <br />

      {/* isPending 直接在同一组件中使用，不需要抽取子组件 */}
      <button type="submit" disabled={isPending}>
        {isPending ? '正在提交...' : '提交'}
      </button>

      {/* 根据 state 显示结果 */}
      {state.status === 'success' && (
        <div style={{ color: 'green', marginTop: '1rem' }}>
          ✅ {state.message}
        </div>
      )}

      {state.status === 'error' && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          ❌ {state.message}
        </div>
      )}

      <div style={{ marginTop: '1rem', fontSize: '0.9em', color: '#666' }}>
        <p>useActionState vs useFormStatus：</p>
        <ul>
          <li>useActionState: 可管理自定义状态（成功/失败/数据）</li>
          <li>useFormStatus: 只提供 pending 状态</li>
          <li>useActionState: 可在同一组件中使用 isPending</li>
          <li>useFormStatus: 必须在 form 子组件中使用</li>
        </ul>
      </div>
    </form>
  )
}

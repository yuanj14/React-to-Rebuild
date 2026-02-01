import { useFormStatus } from 'react-dom'

/**
 * ========== React 19 Form Action 方式 ==========
 *
 * 【核心特点】
 * 1. 使用 <form action={serverAction}> 替代 onSubmit
 * 2. action 接收一个 async 函数，参数是 FormData
 * 3. 不需要 e.preventDefault()，React 自动处理
 * 4. 配合 useFormStatus 可以获取提交状态
 * 5. button 不需要写 type="submit"（默认就是）
 *
 * 【与传统 onSubmit 的区别】
 * | 特性           | form action (React 19)     | onSubmit (传统方式)        |
 * |----------------|---------------------------|---------------------------|
 * | 数据获取        | 自动封装为 FormData        | 需要手动管理 state         |
 * | 阻止默认行为    | 自动处理                   | 需要 e.preventDefault()   |
 * | 提交状态        | useFormStatus 自动追踪     | 需要手动管理 loading state |
 * | 代码量          | 更少，更声明式              | 更多，更命令式             |
 * | 适用场景        | 简单表单、服务端渲染        | 复杂表单、需要精细控制      |
 */

// ========== 后端请求示例 ==========

// 自定义错误类型
class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

// GET 请求 - 参数放在 URL query string
// 底层函数只负责抛出错误，不做 console
async function fetchHelloGet(name: string) {
  const response = await fetch(`/api/hello?name=${encodeURIComponent(name)}`)

  if (!response.ok) {
    throw new ApiError(
      response.status,
      `请求失败: ${response.status} ${response.statusText}`,
    )
  }

  return response.json()
}

// POST 请求 - 参数放在 body（JSON 格式）
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

// Form Action：最外层统一处理错误
async function submitFormAction(formData: FormData) {
  const name = formData.get('name') as string

  try {
    const data = await fetchHelloPost(name)
    console.log('提交成功:', data)
    return data
  } catch (error) {
    // 统一在最外层处理错误
    console.error('提交失败:', error)
    throw error
  }
}

// 提交按钮组件 - 展示 pending 状态
function SubmitButton() {
  const { pending, data } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? `正在提交 ${data?.get('name')}...` : '提交'}
    </button>
  )
}

// 加载指示器组件
function LoadingIndicator() {
  const { pending } = useFormStatus()

  return pending ? <div className="spinner">加载中...</div> : null
}

// 主表单组件
export function FormStatusDemo() {
  return (
    <form action={submitFormAction}>
      <h3>React 19 Form Action 方式</h3>

      <label>
        姓名：
        <input type="text" name="name" defaultValue="guodd" required />
      </label>

      <br />

      {/* useFormStatus 必须在 form 的子组件中使用 */}
      <SubmitButton />
      <LoadingIndicator />

      <div style={{ marginTop: '1rem', fontSize: '0.9em', color: '#666' }}>
        <p>Form Action 方式的优势：</p>
        <ul>
          <li>不需要 e.preventDefault()</li>
          <li>不需要手动管理 loading 状态</li>
          <li>FormData 自动收集表单数据</li>
          <li>useFormStatus 自动追踪提交状态</li>
        </ul>
      </div>
    </form>
  )
}

export { fetchHelloGet, fetchHelloPost }

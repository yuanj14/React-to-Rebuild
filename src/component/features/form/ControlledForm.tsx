import { useEffect, useState } from 'react'

/**
 * ========== 传统 onSubmit 方式（受控表单） ==========
 *
 * 【核心特点】
 * 1. 使用 <form onSubmit={handleSubmit}> 处理提交
 * 2. 必须调用 e.preventDefault() 阻止页面刷新
 * 3. 需要手动管理 state 存储表单数据
 * 4. 需要手动管理 loading/submitting 状态
 * 5. button 需要写 type="submit"
 *
 * 【与 React 19 Form Action 的区别】
 * | 特性           | onSubmit (传统方式)         | form action (React 19)    |
 * |----------------|---------------------------|---------------------------|
 * | 数据获取        | 手动 useState 管理        | 自动封装为 FormData        |
 * | 阻止默认行为    | 需要 e.preventDefault()   | 自动处理                   |
 * | 提交状态        | 需要手动 useState 管理    | useFormStatus 自动追踪     |
 * | 表单验证        | 完全控制，灵活度高          | 需要额外处理               |
 * | 适用场景        | 复杂表单、精细控制          | 简单表单、服务端渲染        |
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
    throw new ApiError(response.status, `请求失败: ${response.status} ${response.statusText}`)
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
    throw new ApiError(response.status, `请求失败: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

type FormDataType = {
  username: string
  agreements: string[]
  agreementDate: string
  contentNumber: number
  radioOption: string
  selectedFile: File | null
  star?: string
}

export function ControlledForm() {
  const [formData, setFormData] = useState<FormDataType>({
    username: 'guodd', // 默认值
    agreements: [],
    agreementDate: '',
    contentNumber: 0,
    radioOption: '',
    selectedFile: null,
    star: '5',
  })

  // 手动管理提交状态（传统方式必须手动做）
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // 新增：副作用处理预览逻辑
  useEffect(() => {
    if (!formData.selectedFile) {
      setPreviewUrl(null)
      return
    }

    // 创建预览 URL
    const objectUrl = URL.createObjectURL(formData.selectedFile)
    setPreviewUrl(objectUrl)

    // 清理函数：当文件改变或组件卸载时，释放内存
    return () => URL.revokeObjectURL(objectUrl)
  }, [formData.selectedFile])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type, value } = e.target

    setFormData((prev) => {
      let finalValue: any = value

      if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement
        finalValue = checked
          ? [...prev.agreements, value]
          : prev.agreements.filter((v) => v !== value)
      } else if (type === 'file') {
        finalValue = (e.target as HTMLInputElement).files?.[0] || null
      } else if (type === 'number' || e.target.tagName === 'SELECT') {
        finalValue = value === '' ? 0 : Number(value)
      }

      return { ...prev, [name]: finalValue }
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // 传统方式必须手动阻止默认行为
    e.preventDefault()

    // 传统方式必须手动管理 loading 状态
    setIsSubmitting(true)

    try {
      // 发送 POST 请求到后端（常用 POST 提交表单）
      const result = await fetchHelloPost(formData.username)
      console.log('onSubmit 提交成功:', result)
      console.log('提交的最终数据：', formData)
    } catch (error) {
      console.error('提交失败:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '300px',
      }}>
      <h3>传统 onSubmit 方式（受控表单）</h3>

      <label htmlFor="username">用户名</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="请输入用户名"
      />

      <div>
        <label>
          <input
            type="checkbox"
            name="agreements"
            value="agree1"
            checked={formData.agreements.includes('agree1')}
            onChange={handleChange}
          />
          同意协议1
        </label>

        <label>
          <input
            type="checkbox"
            name="agreements"
            value="agree2"
            checked={formData.agreements.includes('agree2')}
            onChange={handleChange}
          />
          同意协议2
        </label>
      </div>

      <label>
        <input
          type="date"
          name="agreementDate"
          value={formData.agreementDate}
          onChange={handleChange}
        />
        同意日期
      </label>

      <label>
        内容数量
        <input
          type="number"
          name="contentNumber"
          value={formData.contentNumber}
          onChange={handleChange}
        />
      </label>

      <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        上传附件
        <input
          type="file"
          name="selectedFile"
          accept=".png, .jpg, .jpeg"
          onChange={handleChange}
        />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="预览"
            style={{
              maxWidth: '100%',
              height: 'auto',
              marginTop: '10px',
              borderRadius: '5px',
            }}
          />
        )}
      </label>

      <div style={{ marginTop: '10px' }}>
        <label>
          <input
            type="radio"
            name="radioOption"
            checked={formData.radioOption === 'option1'}
            value="option1"
            onChange={handleChange}
          />
          选项 1
        </label>
        <label>
          <input
            type="radio"
            name="radioOption"
            checked={formData.radioOption === 'option2'}
            value="option2"
            onChange={handleChange}
          />
          选项 2
        </label>
      </div>
      <label>
        好评选项
        <select name="star" value={formData.star} onChange={handleChange}>
          <option value="1">1 星</option>
          <option value="2">2 星</option>
          <option value="3">3 星</option>
          <option value="4">4 星</option>
          <option value="5">5 星</option>
        </select>
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        style={{ marginTop: '20px' }}>
        {isSubmitting ? '正在提交...' : '提交表单'}
      </button>

      <div style={{ marginTop: '1rem', fontSize: '0.9em', color: '#666' }}>
        <p>传统 onSubmit 方式的特点：</p>
        <ul>
          <li>必须调用 e.preventDefault()</li>
          <li>需要手动管理 isSubmitting 状态</li>
          <li>需要手动用 useState 存储所有表单字段</li>
          <li>更灵活，适合复杂表单验证</li>
        </ul>
      </div>
    </form>
  )
}

export { fetchHelloGet, fetchHelloPost }

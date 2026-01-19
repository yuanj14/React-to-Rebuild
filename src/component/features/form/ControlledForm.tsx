import { useEffect, useState } from 'react'

type FormData = {
  username: string
  agreements: string[]
  agreementDate: string
  contentNumber: number
  radioOption: string
  selectedFile: File | null
  star?: string
}

export function ControlledForm() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    agreements: [],
    agreementDate: '',
    contentNumber: 0,
    radioOption: '',
    selectedFile: null,
    star: '5',
  })

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('提交的最终数据：', formData)
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
      <button type="submit" style={{ marginTop: '20px' }}>
        提交表单
      </button>
    </form>
  )
}

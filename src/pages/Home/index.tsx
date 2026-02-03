import { Typography } from 'antd'

// ✨ 直接函数声明，React 19 最佳实践，避免 React.FC
const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <Typography.Title level={2}>欢迎使用若依管理系统</Typography.Title>
      <Typography.Paragraph>这是首页内容区域</Typography.Paragraph>
      <div>hello world</div>
    </div>
  )
}

export default HomePage

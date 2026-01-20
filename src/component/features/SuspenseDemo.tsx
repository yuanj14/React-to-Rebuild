import { Suspense, lazy } from 'react'

const AsyncContent = () => (
  <div>
    <h3>异步加载的内容</h3>
    <p>这个组件是通过 lazy 动态导入的，加载完成后显示。</p>
  </div>
)

// 模拟异步加载的子组件
const AsyncComponent = lazy(
  () =>
    new Promise<{ default: React.FC }>((resolve) => {
      setTimeout(() => {
        resolve({ default: AsyncContent })
      }, 2000)
    }),
)

// Loading 组件
const LoadingFallback = () => (
  <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
    // 🌀 Loading...
  </div>
)

export default function SuspenseDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <Suspense fallback={<LoadingFallback />}>
        <AsyncComponent />
      </Suspense>
    </div>
  )
}
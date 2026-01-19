import React from 'react'
import { useAppleStore } from './applestore'

export default function Zustand() {
  // 选择性订阅全局状态
  const count = useAppleStore((state) => state.count)
  const price = useAppleStore((state) => state.price)
  const increment = useAppleStore((state) => state.increment)
  const setPrice = useAppleStore((state) => state.setPrice)
  const getTotal = useAppleStore((state) => state.getTotal)

  // 组件内逻辑：每次 count 或 price 变化时打印日志
  React.useEffect(() => {
    console.log('[child]count changed:', count)
  }, [count])
  React.useEffect(() => {
    console.log('[child]price changed:', price)
  }, [price])

  return (
    <div style={{ border: '1px solid #aaa', padding: 16}}>
      <h2>Zustand 全局状态调试</h2>
      <div>
        <button onClick={increment}>全局 +1</button>
        <span style={{ marginLeft: 8 }}>全局 count: {count}</span>
      </div>
      <div style={{ marginTop: 12 }}>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          style={{ width: 60 }}
        />
        <span style={{ marginLeft: 8 }}>全局 price: {price}</span>
      </div>
      <div style={{ marginTop: 12 }}>
        <strong>全局总价 getTotal(): {getTotal()}</strong>
      </div>
    </div>
  )
}

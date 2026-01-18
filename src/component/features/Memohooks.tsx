import React, { memo, useRef } from 'react'

interface HelloWorldProps {
  name: {
    name : string
  }
  render?: (count: number) => React.ReactNode
  onClick?: () => void
}

export const HelloWorld = memo((props: HelloWorldProps) => {
  const count = useRef(0)
  const { name, render, onClick } = props

  console.log('HelloWorld rendered')

  return (
    <>
      <h1
        onClick={() => {
          count.current += 1
          onClick?.()
        }}>
        Hello, {name['name']}!
      </h1>
      {render && render(count.current)}
    </>
  )
})

HelloWorld.displayName = 'HelloWorld'

// APP.tsx
// import { useState, useCallback } from 'react'
// import './App.css'
// import { HelloWorld } from './component/Memohooks'

// function App() {
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState({
//     name : "Jack"
//   })

//   const handleClick = useCallback(() => {
//     setCount((prev) => prev + 1)
//   }, [])

//   const renderFn = useCallback(
//     (count: number) => <div> 子组件：{count} </div>,
//     [],
//   )

//   return (
//     <>
//       <HelloWorld name={name} render={renderFn} onClick={handleClick} />
//       父组件 : {count}
//     </>
//   )
// }

// export default App

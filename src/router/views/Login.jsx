import React from 'react'

export default function Login(props) {
    
  return (
    <div>
        <input/>
        <button onClick={()=>{
            localStorage.setItem('token','111')
            props.history.push(`/center`)
        }}>
            登录
        </button>

    </div>
  )
}

import { useReducer } from 'react'

interface State {
  age: number
}

type Action =
  | { type: 'incremented_age' }
  | { type: 'decremented_age' }
  | { type: 'set_age'; payload: number }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'incremented_age':
      return {
        age: state.age + 1,
      }
    case 'decremented_age':
      return {
        age: state.age - 1,
      }
    case 'set_age':
      return {
        age: action.payload,
      }
    // default 添加never tsconfig能自动检测是否遗漏
    default:
      const _exhaustiveCheck: never = action
      throw Error(
        `Unknown action type : ${JSON.stringify(_exhaustiveCheck, null, 2)}`,
      )
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 })

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'incremented_age' })
        }}>
        Increment age
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decremented_age' })
        }}>
        Decrement age
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'set_age', payload: 50 })
        }}>
        Set age to 50
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  )
}
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from './counterSlice'

function Count1() {

    const count = useSelector((state)=>state.count.value)

    const dipatch = useDispatch()

  return (
    <div>
      <h1>hello this count : {count}</h1>

      <button onClick={()=>dipatch(decrement())}>Decement</button>
    </div>
  )
}

export default Count1

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  incrment, zero } from './counterSlice'

function CounterData() {

    // state global store inner slice
    const count = useSelector((state)=>state.count.value)

    console.log(count)

    const dipatch = useDispatch()

  return (
    <div>
      <h1>hello this counter data</h1>
      <h1>Hello count : {count}</h1>
      <button onClick={()=>dipatch(incrment())}>Increment</button>
      <button onClick={()=>dipatch(zero())}>Zero</button>
    </div>
  )
}

export default CounterData

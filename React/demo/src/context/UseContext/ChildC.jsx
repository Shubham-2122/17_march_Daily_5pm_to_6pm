import React, { useContext } from 'react'
import { user } from './ChildA'

function ChildC() {

    const {data1,setdata1} = useContext(user);
    console.log(data1.counter)

  return (
    <div>
      <h1>Hello this Chiald C compo</h1>
      <h1> hello name : {data1.counter}</h1>
      <button onClick={()=>setdata1({...data1,data1 : data1.counter + 1})}>incremrnt</button>
    </div>
  )
}

export default ChildC

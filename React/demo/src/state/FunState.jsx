// hooks :- it's resuse 
// useState :- react
// const [state_deifne,setstate] = useState("")
// import useState from react

import React, { useState } from 'react'
import Image from './Image'

function FunState() {

    // define,setdefine = useState("value") string
    const [name,setname] = useState("sonal maam")
    // number
    const [count,setcount] = useState(0)
    // boolen
    const [isimage,setisimage] = useState(true)
    console.log(name)

    const increment2=()=>{
        setcount(count+2)
    }
    const changename2=()=>{
        setname("vivek")
    }

  return (
    <div>
        <h1>Hello this Function in state</h1>
        <h1>Hello {name}</h1>
        <button onClick={()=>setname("Divya")}>Chnage name</button>
        <button onClick={changename2}>Change name 2</button>

        <h1>hello count :- {count}</h1>
        <button onClick={()=>setcount(count+1)}>increment</button>
        <button onClick={increment2}>increment by 2</button>
        <button onClick={()=>setcount(count - 1)}>Decrement</button>
        <button onClick={()=>setcount(0)}>zero</button>
        <br /> 
        <br />
        <button onClick={()=>setisimage(false)}>Hide</button>
        <button onClick={()=>setisimage(true)}>Show</button>
        <button onClick={()=>setisimage(!isimage)}>Toggle</button>

        {
            (isimage)?<Image />:false
        }
    </div>
  )
}

export default FunState

import React, { useState } from 'react'
import Image from './Image'

function Funobject() {

    
    const [data,setdata]= useState({
        name : "vivek",
        count : 0,
        isimage : true
    })

    console.log(data.name)

  return (
    <div>
      <h1>hello this Function state object</h1>
      <h1>hello name :- {data.name}</h1>
      <button onClick={()=>setdata({...data,name:"shubham jadav"})}>change name</button>
      <button onClick={()=>setdata({...data,name:"sujal jadav"})}>Change name 2</button>

      <h1>Hello count : {data.count}</h1>
      {/* 0 =>  */}
      <button onClick={()=>setdata({...data,count:data.count+1})}>incremnt</button>
      <button onClick={()=>setdata({...data,count:data.count - 1})}>decrement</button>
      <button onClick={()=>setdata({...data,count:0})}>Zero</button>

    <hr /> <hr />
    <button onClick={()=>setdata({...data,isimage:false})}>Hide</button>
    <button onClick={()=>setdata({...data,isimage:true})}>Show</button>
    <button onClick={()=>setdata({...data,isimage:!data.isimage})}>toggle</button>
      {
        (data.isimage)?<Image />:false
      }
    </div>
  )
}

export default Funobject

// react 16.8 hooks only use for function
// useEffect :- it's function side effect 
// api call other api data read 
// useEffect vitrual dom re-reder 
// first para :- function logic /api 
// second :- optional 


import React, { useEffect, useState } from 'react'

function Effect() {

    const [name,setname] = useState("vivek")

    // opdational empty 
    // useEffect(()=>{
    //     console.log("outside function call")
    //     return(()=>{
    //         console.log("inside function call")
    //     })
    // })

    // blank array
    // useEffect(()=>{
    //     console.log("outside function call")
    //     return(()=>{
    //         console.log("inside function call")
    //     })
    // },[])

    useEffect(()=>{
        console.log("outside function call")
        return(()=>{
            console.log("inside function call")
        })
    },[name])
  return (
    <div>
        <h1>hello this is useffct compoenet</h1>
        <h1>Hello {name}</h1>
        <button onClick={()=>setname("shubham")}>change name</button>
    </div>
  )
}

export default Effect

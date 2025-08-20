import React, { createContext, useState } from 'react'
import ChiladD from './ChiladD'
import ChiladB from './ChiladB'
import ChildC from './ChildC'

// create conetext
export const user = createContext()

function ChildA() {

    const [name,setname] = useState("shubham");
    const [data1,setdata1] = useState({
        counter : 0
    })

  return (
    <div>

    {/* 1) context create  
        2) provide data
        3) useContext hook
    */}

      <h1>Hello this Chiald A compo</h1>
      <user.Provider value={{name,setname,data1,setdata1}}>
       
        <ChiladB />
        <ChildC />
         <ChiladD />
      </user.Provider>
    </div>
  )
}

export default ChildA

import React, { useContext } from 'react'
import { user } from './ChildA'

function ChiladD() {

    const {name,setname} = useContext(user)

  return (
    <div>
      <h1>Hello this Chiald D compo</h1>
      <h1>Hello this name : {name}</h1>
      <button onClick={()=>setname("data")}>Chnage name</button>
    </div>
  )
}

export default ChiladD

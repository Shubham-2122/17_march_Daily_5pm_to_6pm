import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>hello this D Component</h1>
        <h1>Hello name :- {name}</h1>
        <button onClick={()=>setname("diya")}>Change name</button>
    </div>
  )
}

export default D

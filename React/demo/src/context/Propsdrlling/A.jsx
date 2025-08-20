import React, { useState } from 'react'
import B from './B';

function A() {

    const [name,setname] = useState("vivek");

  return (
    <div>
      <h1>hello this A Component</h1>
      <B name={name} setname={setname} />
    </div>
  )
}

export default A

import React from 'react'
import "./style.css"

function Css() {
  
    let internalcss = {
        background : "blue",
        color : "red"
    }

    return (
    <div>
      <h1>hello this Css component</h1>
      3 type 
      1) inline 
      2) internal :- not use 
      3) external 

      <h1 style={{background : "red",color:"blue"}}>Hello this inline css</h1>

      <h1 style={internalcss}>Hello this tag</h1>

        <h2>hello this h2 tag here</h2>
        <div className="main"></div>
    
    </div>
  )
}

export default Css

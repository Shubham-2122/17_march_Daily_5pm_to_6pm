
// use ref :- real dom direact effect
// vitural :- after real dom
// reference key data pass
// wihout refresh real dom :- re-reder stop


import React, { useRef } from 'react'
import Header from '../layout/Coman/Header'

function UseRefence() {

    const refelemet = useRef();

    const ondata =()=>{
        refelemet.current.focus();
    }

    const datachange=()=>{
        refelemet.current.style.color = "red";
        refelemet.current.style.background = "blue";
    }

    return (
        <div>
            {/* readli  */}
            <Header />
            <h1>hello this use Ref</h1>
            <input type="text" ref={refelemet} placeholder='Enter your name' />
            <button onClick={ondata}>Click me</button>
            <button onClick={datachange}>color change data</button>
        </div>
    )
}

export default UseRefence

import React from 'react'
import Header from '../layout/Coman/Header'
import A from './Propsdrlling/A'
import ChildA from './UseContext/ChildA'

function Maincontext() {
  return (
    <div>
        <Header />
        
        1) props drlling
        {/* <A /> */}

        2) use context 
        <ChildA />

    </div>
  )
}

export default Maincontext

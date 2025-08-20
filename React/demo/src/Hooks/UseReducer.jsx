// use reducer :- usestate 
// user logic reuse :- complex stat handle
// const [name,dispatch] = useReducer(reducer,inital state)

import React, { useReducer } from 'react'
import Header from '../layout/Coman/Header'

let initialstate = 0

// comana logic use
export const reducer =(state,action)=>{
    switch (action) {
        case 'increment':
            // state = state + 1
            return state += 1;
            break;
        case 'decrement':
            return state -= 1;
            break;
        case 'zero':
            return state = 0;
        
        default:
            return initialstate;
            break;
    }
}

function UseReducer() {

    const [count,dispatch] = useReducer(reducer,initialstate)

  return (
    <div>
        <Header />
        <h1>hello this use reducer</h1>
        <h1>Hello count : {count}</h1>

        <button onClick={()=>dispatch('increment')}>Increment </button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('zero')}>Zero</button>
    </div>
  )
}

export default UseReducer

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Not() {

    const redirect = useNavigate()

    const goback=()=>{
        redirect("/")
    }

  return (
    <div>
      <h1 className='bg-danger text-light text-center'>404 NOT FOUND PAGE</h1>
      <Link to="/" className='btn btn-success'>Back to home</Link>

      <button onClick={goback} className='btn btn-info'>Home page</button>
    </div>
  )
}

export default Not

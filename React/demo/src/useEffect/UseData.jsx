import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseData() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res.data)
        setuser(res.data)
    }

  return (
    <div>
      <h1>hello this axios data</h1>
      {
        console.log(user)
      }
    </div>
  )
}

export default UseData

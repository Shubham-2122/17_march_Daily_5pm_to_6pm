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
      
     
          <div className="container">
              <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">address</th>
                        <th scope="col">company name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((user) => {
                            console.log(user)
                            return (
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
          </div>
      
    </div>
  )
}

export default UseData

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showuser } from '../Slice/userSlice'

function Read() {

  const { users, loading } = useSelector((state) => state.user)

  console.log(users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showuser())
  }, [])

  return (
    <div className='container'>
      <h1 className='text-center mt-5'>Hello USER management</h1>
      <table className="table table-dark table-hover">
        
        <thead>
          <tr className='text-center'>
            <th scope="col">#id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">password</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((data, index) => {
              return (
                <tr className='text-center'>
                  <th scope="row">{data.id}</th>
                  <td>
                    {data.name}
                  </td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>
                    <button className='btn btn-info'>View</button>
                    <button className='btn btn-success mx-2'>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Read

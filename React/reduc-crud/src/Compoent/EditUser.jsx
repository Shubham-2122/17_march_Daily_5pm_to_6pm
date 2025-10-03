import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../Slice/userSlice'

function EditUser() {

    const redirect = useNavigate()
    const { id } = useParams()

    console.log(id)

    const dispatch = useDispatch()

    const [user1, setuser1] = useState([])

    const { users, loading } = useSelector((state) => state.user)
    console.log(users)

    useEffect(() => {
        const singluser = users.filter((data) => data.id === id)
        console.log(singluser[0])
        setuser1(singluser[0])
    }, [])

    const getchange = (e) => {
        setuser1({
            ...user1,
            [e.target.name]: e.target.value
        })
        console.log(user1)
    }

    const getsubmit = (e) => {
        e.preventDefault()
        dispatch(updateuser(user1))
        redirect("/")

    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-6 mx-auto">
                        <h1>hello user Update From</h1>
                        <form >
                            <div className="mb-3" >
                                <label htmlFor="name" className="form-label">Enter your Name</label>
                                <input type="text" name='name' onChange={getchange} value={user1 && user1.name} className="form-control" id="name" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' onChange={getchange} value={user1 && user1.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' onChange={getchange} value={ user1 && user1.password} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={getsubmit}>update user</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditUser

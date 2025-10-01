import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createuser } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function CreateUser() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
        console.log(form)
    }

    const dispatch = useDispatch()

    const getsubmit=(e)=>{
        e.preventDefault()

        if(form.email == "" || form.name == "" || form.password == ""){
            alert("pls Field a data first");
            return false;
        }

        dispatch(createuser(form))
        redirect("/")
    }



    return (
        <div className='container'>
            <div className="row">
                <div className="col-6 mx-auto">
                    <h1>hello user Create From</h1>
                    <form onSubmit={getsubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Enter your Name</label>
                            <input type="text" name='name' value={form.name} onChange={getchange} className="form-control" id="name" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' onChange={getchange} value={form.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' onChange={getchange} value={form.password} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default CreateUser

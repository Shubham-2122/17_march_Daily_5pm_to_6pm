import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
    const redirect =  useNavigate()

    const [form,setform] =useState({
        id:"",
        name :"",
        email :"",
        password:"",
        status :""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            id:new Date().getTime().toString(),
            status:"unblock",
            [e.target.name]:e.target.value
        })
        console.log(form)
    }

    const getsubmit=async(e)=>{
         e.preventDefault()

         if(form.email == "" || form.password == "" || form.name==""){
            toast.error("pls field first data")
            return false;
         }

        const res = await axios.post("http://localhost:3000/user",form);
        console.log(res.data)
        toast.success("succefuuly register");
        redirect("/login")
        setform({
            id:"",
        name :"",
        email :"",
        password:"",
        status :""
        })

    }

    return (
        <div>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <form action="
      ">
                    <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                            <MDBInput onChange={getchange} name='name' value={form.name} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput onChange={getchange} name='email' value={form.email} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput onChange={getchange} name='password' value={form.password} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
                            <div className='d-flex flex-row justify-content-center mb-4'>
                              
                                <Link to="/login" className='text-dark'>alredy account</Link>
                            </div>
                            <MDBBtn onClick={getsubmit} className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBContainer>
        </div>
    )
}

export default Register

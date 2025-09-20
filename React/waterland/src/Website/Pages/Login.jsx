import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {

  const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }
    },[])

    const [form, setfrom] = useState({
        email: "",
        password: ""
    })

    const getchage = (e) => {
        setfrom({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            const { email, password } = form

            if (email == "" || password == "") {
                console.log("email and password are empty");
                toast.error("email and password are empty")
                return false
            }
            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)

            // email match
            if (res.data.length === 0) {
                console.log("email does not match..")
                toast.error("email does not match")
                return false
            }

            let user = res.data[0];

            if (user.password !== password) {
                console.log("Passwod does not match");
                toast.error("password does not match");
                return false
            }

            if(user.status == "block"){
              toast.error("Account hase been block..");
              return false
            }

            localStorage.setItem("Uid",user.id)
            localStorage.setItem("Uname",user.name);
            toast.success("successfully login..");
            redirect("/")
            

        } catch (error) {
            console.log("this api erro", error)
            toast.error("api not Found");
        }

    }

  return (
    <div>
       <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <form action="" >
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput name='email' value={form.email} onChange={getchage} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput name='password' value={form.password} onChange={getchage} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                <Link to="/register" className='btn btn-success'>Register now</Link>
              <MDBBtn size='lg' onClick={getsubmit}>
                Login
              </MDBBtn>
              
              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>
          </form>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  )
}

export default Login

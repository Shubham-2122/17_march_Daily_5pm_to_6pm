import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dash")
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
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)

            // email match
            if (res.data.length === 0) {
                console.log("email does not match..")
                toast.error("email does not match")
                return false
            }

            let admin = res.data[0];

            if (admin.password !== password) {
                console.log("Passwod does not match");
                toast.error("password does not match");
                return false
            }

            localStorage.setItem("Aid",admin.id)
            localStorage.setItem("Aname",admin.name);
            toast.success("successfully login..");
            redirect("/dash")
            console.log("password match")

        } catch (error) {
            console.log("this api erro", error)
            toast.error("api not Found");
        }

    }


    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <form action="" onSubmit={getsubmit}>
                        <MDBCol col='12'>

                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 text-white text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <MDBInput value={form.email} onChange={getchage} name='email' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={form.password} onChange={getchage} name='password' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                        Login
                                    </MDBBtn>



                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </form>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Alogin

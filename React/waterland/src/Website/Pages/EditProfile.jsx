import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import Header from '../Coman/Header';
import Footer from '../Coman/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { redirect, useNavigate } from 'react-router-dom';

function EditProfile() {

    const redirect = useNavigate()

    const [edited, setedited] = useState({
        id: "",
        email: "",
        name: "",
        password: "",
        status: ""
    })

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("Uid")}`);
        console.log(res.data)
        setedited(res.data)
    }

    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
        console.log(edited)
    }

    const getupdate = async (e) => {
        e.preventDefault()

        try {
            if (!edited.email.trim() || !edited.name.trim() || !edited.password.trim()) {
                console.log("pls Field required...!")
                toast.error("pls Field required...!")
                return false
            }

            const res = await axios.patch(`http://localhost:3000/user/${edited.id}`, edited);
            console.log(res.data)
            redirect("/")
            localStorage.setItem("Uname", res.data.name)
            setedited({
                id: "",
                email: "",
                name: "",
                password: "",
                status: ""
            })

        } catch (error) {
            toast.error("api data not Found..", error);
        }
    }

    return (
        <div>
            <Header />
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <form action="" onSubmit={getupdate}>
                    <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Update profile</h2>
                            <MDBInput name='name' onChange={getchange} value={edited.name} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput name='email' onChange={getchange} value={edited.email} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput name='password' onChange={getchange} value={edited.password} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />

                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>update profile</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBContainer>
            <Footer />
        </div>
    )
}

export default EditProfile

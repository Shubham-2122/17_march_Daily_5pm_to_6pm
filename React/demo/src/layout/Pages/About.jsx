import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />
        <h1 className='p-5 bg-success'>Hello this ABout page..</h1>
        <Link to="about1" className='mx-4'>About1</Link>
        <Link to="about2" className='me-4'>About2</Link>
         <Link to="about3" >About3</Link>
        <Outlet />
      <Footer />
      
    </div>
  )
}

export default About

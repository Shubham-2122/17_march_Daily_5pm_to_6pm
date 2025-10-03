import React from 'react'
import Read from './Compoent/Read'
import Navabar from './Compoent/Navabar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './Compoent/CreateUser'
import EditUser from './Compoent/EditUser'

function App() {
  return (
    <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path='/' element={<Read />} />
          <Route  path='/createuser' element={<CreateUser />} />
          <Route path='/edit/:id' element={<EditUser />} />
        </Routes>

    </BrowserRouter>
  )
}

export default App

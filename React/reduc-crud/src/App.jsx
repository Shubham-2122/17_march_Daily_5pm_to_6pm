import React from 'react'
import Read from './Compoent/Read'
import Navabar from './Compoent/Navabar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './Compoent/CreateUser'

function App() {
  return (
    <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path='/' element={<Read />} />
          <Route  path='/createuser' element={<CreateUser />} />
        </Routes>

    </BrowserRouter>
  )
}

export default App

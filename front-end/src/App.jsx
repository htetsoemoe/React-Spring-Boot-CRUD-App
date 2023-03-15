import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import ViewUser from './components/ViewUser'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/adduser' element={<AddUser />}/>
        <Route path='/edituser/:id' element={<EditUser />}/>
        <Route path='/viewuser/:id' element={<ViewUser />}/>
      </Routes>
    </div>
  )
}

export default App

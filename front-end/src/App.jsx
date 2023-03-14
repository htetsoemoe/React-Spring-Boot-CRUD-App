import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
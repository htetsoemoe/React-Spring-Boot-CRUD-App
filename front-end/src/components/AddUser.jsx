import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddUser = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: ""
  })

  const {name, userName, email} = user

  const onInputChange = e => {
    // console.log(e.target.name);
    setUser({...user, [e.target.name]: e.target.value})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8080/user", user)
    navigate("/")
  }


  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="">Register User</h2>

          <form onSubmit={e => submitHandler(e)}>
            <div className="row">
              <div className="col">
                <div className="mt-2 mb-2">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" name='name' value={name} onChange={e => onInputChange(e)} placeholder='Enter Name' className="form-control" />
                </div>

                <div className="mt-2 mb-2">
                  <label htmlFor="username" className="form-label">User Name</label>
                  <input type="text" name='userName' value={userName} onChange={e => onInputChange(e)} placeholder='Enter User Name' className="form-control" />
                </div>

                <div className="mt-2 mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="text" name='email' value={email} onChange={e => onInputChange(e)} placeholder='Enter email' className="form-control" />
                </div>
              </div>
            </div>

            <div className="col">
              <button className="btn btn-outline-primary" type='submit'>Submit</button>
              <Link to={'/'} className="btn btn-outline-danger mx-4">Home</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser

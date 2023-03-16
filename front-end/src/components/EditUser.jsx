import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const navigate = useNavigate()

  const {id} = useParams()

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: ""
  })

  const { name, userName, email } = user

  useEffect(() => {
    loadUser()
  }, [])

  const onInputChange = e => {
    // console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // If user submit with new data
  const submitHandler = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/user/${id}`, user)
    navigate("/")
  }

  // This function will work in useEffect after render this component
  const loadUser = async () => {
    const api = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(api.data)
  }

  return (
    <div className='container'>
      <div className="mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="">Edit User</h2>

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
                <button className="btn btn-outline-primary" type='submit'>Edit</button>
                <Link to={'/'} className="btn btn-outline-danger mx-4">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser

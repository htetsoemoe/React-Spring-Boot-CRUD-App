import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewUser = () => {

  const { id } = useParams()
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: ""
  });

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const api = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(api.data);
  }

  return (
    <div className='container'>
     <div className="mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="">User Details</h2>

            <div className="card my-4">
              <div className="card-header">
                <span className='fw-bolder'>User ID</span> : {id}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className='fw-bolder'>Name</span> : {user.name}
                </li>
                <li className="list-group-item">
                  <span className='fw-bolder'>User Name</span> : {user.userName}
                </li>
                <li className="list-group-item">
                  <span className='fw-bolder'>Email</span> : {user.email}
                </li>
              </ul>
            </div>

            <Link to={'/'} className="btn btn-outline-danger">Home</Link>
          </div>
        </div>
     </div>
    </div>
  )
}

export default ViewUser

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  }, [users])

  const getUsers = async () => {
    const api = await axios.get('http://localhost:8080/users')
    setUsers(api.data);
  }

  return (
    <div className='container'>
      <div className="mt-5">
        <table className="table table-striped border">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={''} className='btn btn-sm btn-outline-primary mx-2'>
                      Details
                    </Link>

                    <Link to={''} className='btn btn-sm btn-outline-secondary mx-2'>
                      Edit
                    </Link>

                    <Link to={''} className='btn btn-sm btn-outline-danger mx-2'>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home

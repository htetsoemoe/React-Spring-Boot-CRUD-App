import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  }, [users])

  // This function will work in useEffect and synchronizing to back-end endpoint after render this component
  const getUsers = async () => {
    const api = await axios.get('http://localhost:8080/users')
    setUsers(api.data);
  }

  // This function will work when use click the delete button
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`)
    getUsers()
  }

  return (
    <div className='container'>
      <div className="mt-5">
        <table className="table table-striped border shadow">
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
                    <Link to={`/viewuser/${user.id}`} className='btn btn-sm btn-outline-primary mx-2'>
                      Details
                    </Link>

                    <Link to={`/edituser/${user.id}`} className='btn btn-sm btn-outline-secondary mx-2'>
                      Edit
                    </Link>

                    <Link onClick={() => deleteUser(user.id)}
                      className='btn btn-sm btn-outline-danger mx-2'>
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

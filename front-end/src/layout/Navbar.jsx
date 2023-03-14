import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-primary">
                <div className="container">
                    <Link to={'/'} className='navbar-brand text-white'>
                        Simple CRUD With React & Spring Boot
                    </Link>
                    <button className="btn btn-danger" type="submit">Add User</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

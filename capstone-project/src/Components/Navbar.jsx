import "./NavbarTwo.css" 
import React from 'react'

import {Link, useNavigate } from "react-router-dom"


const Navbar = ({token, setToken}) => {
    const navigate = useNavigate
    const handleLogout = () => {
        setToken(null)
        navigate("/login")
    }
  return (
    <nav className="navbar-container">
        <div className="ss-title">
            <h1>Epic Website</h1>
        </div>
        <div className='link'>
            <Link className='nav-link' to={"/"}>
                Products
            </Link>
            <Link to={"/Register"} className='nav-link'> Register </Link>
            {token ? (
                <>
                <Link className='nav-link' to={"/cart"}>Cart</Link>
            <button className='logout-button' onClick={handleLogout}>Logout</button> 
            </> ): (
            <Link to="/login" className='nav-link'>
                Login
            </Link>  
        )}
        </div>
    </nav>
  )
}

export default Navbar
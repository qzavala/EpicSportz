import React from 'react'
import "./NavbarTwo.css" 
import { Link, useNavigate } from "react-router-dom"


const Navbar = ({token, setToken}) => {
    const navigate = useNavigate
    const handleLogout = () => {
        setToken(null)
        navigate("/login")
    }
  return (
    <nav className="navbar-container">
        <div>
            Epic Website
        </div>
        <div className='link-tings'>
            <Link className='nav-link' to={"/"}>
                Products
            </Link>
            <Link  className='nav-link'to={"/Register"}> Register </Link>
            {token ? (
            <button className='logout-button' onClick={handleLogout}>Logout</button> ): (
            <Link to="/login" className='nav-link'>
                Login
            </Link>  
        )}
        </div>
    </nav>
  )
}

export default Navbar
import React from  'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <Link to={"/"}>Home</Link>
        <Link to={"SignUp"}>SignUp</Link>
        <Link to={"Login"}>Login</Link>
        <Link to={"Cart"}>Cart</Link>
        </div>
    )
}

export default Navbar
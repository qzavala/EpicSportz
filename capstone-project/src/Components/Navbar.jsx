import React from  'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <Link to={"/"}>Home</Link>
        <Link to={"SignUp"}>Home</Link>
        <Link to={"Login"}>Home</Link>
        <Link to={"Cart"}>Home</Link>
        </div>
    )
}

export default Navbar
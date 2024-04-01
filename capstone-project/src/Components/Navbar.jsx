import React from  'react'
import { Link } from 'react-router-dom'

const Navbar = ({token}) => {
    return (
        <div className='Navbar1'>
        <Link to={"/"}>Home</Link>
        <Link to={"/Login"}>Login</Link>
        {token ? null : <Link to={"/SignUp"}>SignUp</Link>}
        {/* <Link to={"Cart"}>Cart</Link> */}
        </div>
    )
}

export default Navbar
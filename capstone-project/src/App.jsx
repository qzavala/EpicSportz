import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Cart from './Pages/Cart'


function App() {
  

  return (
    <>
   <Navbar />
   <Routes>
<Route path='/'  element={<Home/>}  />
<Route path='SignUp'  element={<SignUp/>}  />
<Route path='Login'  element={<Login/>}  />
<Route path='Cart'  element={<Cart/>}  />

   </Routes>
    </>
  )
}

export default App

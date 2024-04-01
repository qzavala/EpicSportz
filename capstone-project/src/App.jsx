import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Cart from './Pages/Cart'


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <div>
<h2 className='WebTitle'>E-commerce Website</h2>
   <Navbar />
   <Routes>
<Route path='/'  element={<Home/>}  />
<Route path='SignUp'  element={<SignUp/>}  />
<Route path='Login'  element={<Login/>}  />
<Route path='/product/:id'  element={<Cart/>}  />
{/* <Route path='Cart'  element={<Cart/>}  /> */}

   </Routes>
    </div>
    </>
  )
}

export default App

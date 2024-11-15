import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ngo_Details from './pages/Ngo_Details'
import Ngo_List from './pages/Ngo_List'
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import ResetPassword from './pages/ResetPassword'
import RegisterNgo from './pages/RegisterNgo'
import { useSelector } from 'react-redux'
import About from './pages/About'

function App() {
  const token = useSelector(state => state.user.userLoggedIn);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/listings' element={<Ngo_List />} ></Route>
        <Route path='/details' element={<Ngo_Details />} ></Route>
        <Route path='/about' element={<About />} ></Route>

        {token && <Route path='/register-ngo' element={<RegisterNgo />}></Route>}
        <Route path="/register-ngo" element={<Navigate replace to="/login" />} />

        {/* {token && <Route path='/donate' element={<Donate />}></Route>} */}
        <Route path="/donate" element={<Navigate replace to="/login" />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
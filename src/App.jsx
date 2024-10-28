import React from 'react'
import './App.css'
import './components/Login/log1.css'
import './components/Signup/signup.css'
import './components/Check/check.css'
import './components/Navbar/nav.css'
import './components/Body/body.css'
import Home from './components/Home/home.jsx'
import Navbar from './components/Navbar/nav.jsx'
import { Outlet } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom';

const App =()=> {
  return (
  <div className='App'>
    <Navbar />
    {/* <nav>
        <Link to="/loading">Loading<br></br></Link>
        <Link to="/block">Block<br></br></Link>
        <Link to="/blockchain">Blockchain<br></br></Link>
        <Link to="/login">Login<br></br></Link>
        <Link to="/signup">Sign-Up<br></br></Link>
        <Link to="/check">Check<br></br></Link>
      <Routes>
        <Route path='/login' element={<login/>}/>
        <Route path="/" element={<center></center>} />
      </Routes>
      </nav> */}
      <Outlet />
  </div>
  );
};

export default App
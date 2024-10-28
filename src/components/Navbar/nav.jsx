import React from 'react'
import { useNavigate, Link } from "react-router-dom";

function nav() {
  return (
    <div className='nav'>
        <nav>
        <span className='park'>Parkit.</span>
        <div className='list'>
            <ul>
            <li><Link to={"/"}> Home </Link></li>
            <li><Link to={"/about"}> About</Link></li>
            <li><Link to={"/login"}> Login</Link></li>
            <li><Link to={"/signup"}>Sign-up</Link></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default nav
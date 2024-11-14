// src/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {


    return (
        <div className="login-form">
            <div className='h1'>
                <h1>Login</h1>
            </div>
            <div className='block'>
                <div className='log-1'>
                    <form>
                        <label htmlFor="email">EMAIL ID</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email-Address'
                            required
                        /><br/>
                        <label htmlFor="password">PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className='log-2'> background image </div>
            </div>
            <div className='log-3'>
                <p>Don't have an account? <Link to="/signup" className='text-[#5393d7] hover:no-underline hover:text-[#0d2ed2]'>Create New</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;
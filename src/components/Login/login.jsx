// src/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validEmail = 'park@gmail.com';
    const validPassword = 'park@123';

    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleLogin = (event) => {
        event.preventDefault();

        if (email === validEmail && password === validPassword) {
            // Navigate to the admin page on successful login
            navigate("/admin");
        } else {
            // Optionally, you can display an error message
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="login-form">
            <div className='h1'>
                <h1>Login</h1>
            </div>
            <div className='block'>
                <div className='log-1'>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">EMAIL ID</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email-Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /><br/>
                        <label htmlFor="password">PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
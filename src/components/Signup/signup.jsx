import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNo: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // adding to data base
    console.log('Form submitted:', formData);
  };

  return (
    <div className='signup'>
      <h2>Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type='text'
          id='username'
          value={formData.username}
          onChange={handleChange}
          required
          placeholder='Enter Username'
        />
        <br/>
        <label htmlFor="phoneNo">Phone No:</label>
        <input
          type='tel'
          id='phoneNo'
          value={formData.phoneNo}
          onChange={handleChange}
          required
          placeholder='Enter Phone Number'
          pattern="[0-9]{10}"
        />
        <br/>
        <label htmlFor="email">Email Id:</label>
        <input
          type='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Enter Email Id'
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input
          type='password'
          id='password'
          value={formData.password}
          onChange={handleChange}
          required
          placeholder='Enter Password'
        />
        <br/>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type='password'
          id='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder='Confirm Password'
        />
        <br/>
        <label htmlFor="country">Country:</label>
        <select 
          id='country'
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value=''>Select Country</option>
          <option value='india'>India</option>
          <option value='usa'>USA</option>
          <option value='canada'>Canada</option>
          <option value='uae'>UAE</option>
          <option value='america'>America</option>
          <option value='afghanistan'>Afghanistan</option>
        </select>
        <br/>
        <button type="submit">Sign Up</button>
      </form>  
      <p>
        Already have an account?<Link  to="/login" className='caret-blue-700'> Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
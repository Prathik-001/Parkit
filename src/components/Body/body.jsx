import React from 'react'
import { Link } from 'react-router-dom'
function hero() {
  return (
    <div className='body'>
        <h1>Your Parking Solution At Your Finger Tip Using "Parkit".</h1>
        <div className='button'>
          <p><Link to="/login" className='btext'>Book My Slot</Link></p>
          </div>
        
    </div>
  )
}

export default hero;
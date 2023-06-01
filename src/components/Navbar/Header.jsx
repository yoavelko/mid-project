import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="navbar">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/about">About</Link>
        </div>
        <div className="dropdown">
          Courses
          <div className="dropdown-content">
            <Link to="/course1">Course 1</Link>
            <Link to="/course2">Course 2</Link>
            <Link to="/course3">Course 3</Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/personal-area">Personal Area</Link>
        </div>
      </div>


    </div>
  )
}

export default Header
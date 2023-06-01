import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="navbar">
        <div id='logo-container'>
          <Link to={'/'}>
            <img id='header-logo' src="https://cyberpro-israel.co.il/wp-content/uploads/2021/01/CYBERPRO-Israel-Logo-Black.svg" alt="" />
          </Link>
        </div>
        <Link to="/">
          <div className="nav-item">
            דף הבית
          </div>
        </Link>
        <Link to="/about">
          <div className="nav-item">
            אודות
          </div>
        </Link>
        <div id="dropdown" className='nav-item'>
          הקורסים שלנו
          <div id="dropdown-content">
            <Link to="/RedTeam">
              <div className='dropdown-content'>
                Red Team Expert
              </div>
            </Link>
            <Link to="/BlueTeam">
              <div className='dropdown-content'>
                Blue Team Defender
              </div>
            </Link>
            <Link to="/Essentials">
              <div className='dropdown-content'>
                Cyber Essentials
              </div>
            </Link>
            <Link to="/FullStack">
              <div className='dropdown-content'>
                Full-Stack Development
              </div>
            </Link>
          </div>
        </div>
        <Link to="/personal-area">
          <div className="nav-item">
            איזור אישי
          </div>
        </Link>
      </div>


    </div>
  )
}

export default Header
import { React, useContext, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { cartStyle } from '../../Contexts/cartStyle'

const Header = () => {

  const { style } = useContext(cartStyle)

  return (
    <div className='header'>
      <div className="navbar">
        <div id='logo-container'>
          <Link to={'/'} onClick={() => window.scrollTo(0, 0)}>
            <img id='header-logo' src="https://cyberpro-israel.co.il/wp-content/uploads/2021/01/CYBERPRO-Israel-Logo-Black.svg" alt="" />
          </Link>
        </div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <div className="nav-item">
            דף הבית
          </div>
        </Link>
        <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
          <div className="nav-item">
            אודות
          </div>
        </Link>
        <div id="dropdown" className='nav-item'>
          הקורסים שלנו
          <div id="dropdown-content">
            <Link to="/RedTeam" onClick={() => window.scrollTo(0, 0)}>
              <div className='dropdown-content'>
                Red Team Expert
              </div>
            </Link>
            <Link to="/BlueTeam" onClick={() => window.scrollTo(0, 0)}>
              <div className='dropdown-content'>
                Blue Team Defender
              </div>
            </Link>
            <Link to="/Essentials" onClick={() => window.scrollTo(0, 0)}>
              <div className='dropdown-content'>
                Cyber Essentials
              </div>
            </Link>
            <Link to="/FullStack" onClick={() => window.scrollTo(0, 0)}>
              <div className='dropdown-content'>
                Full-Stack Development
              </div>
            </Link>
          </div>
        </div>
        <Link to="/Login">
          <div className="nav-item" id={style}>
            איזור אישי
          </div>
        </Link>
      </div>


    </div>
  )
}

export default Header
import { React, useContext, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { cartStyle } from '../../Contexts/cartStyle'

const Header = () => {

  const { style } = useContext(cartStyle)

  return (
    <>
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
          <div className="nav-item" id={style}>
            איזור אישי
            <div id="personal-dropdown">
              <Link to="/LogIn" onClick={() => window.scrollTo(0, 0)}>
                <div className='personal-dropdown'>
                  התחברות
                </div>
              </Link>
              <Link to="/Cart" onClick={() => window.scrollTo(0, 0)}>
                <div className='personal-dropdown'>
                  הסל שלי
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-navbar">
        <div className="header-sidebar">
          <div id="space-between"></div>
          <div>Cyberpro</div>
          <div id="logged-as"></div>
        </div>
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
            <li className="sidebarItem" id="homepage"><Link to="/UserArea">Navigate</Link></li>
            <li className="sidebarItem" id="homepage"><Link to="/UserGradePage">Grades</Link></li>
            <li className="sidebarItem" id="homepage"><Link to="/Grading">Grading</Link></li>
            <li className="sidebarItem" id="CourseCalander"><Link to="/CourseCalander">Course's Schedule</Link></li>
            <li className="sidebarItem" id="UserStudyPresentation"><Link to="/UserStudyPresentation">Files</Link></li>
            <li className="sidebarItem" id="logout"><Link to="/Login">Log-out</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
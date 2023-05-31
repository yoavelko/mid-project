import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='navbar-container'>
        <ul className='navbar-holder'>
          <li className='navbar' ><a href="#">Home</a></li>
          <li className='navbar'><Link to = '/About'> About </Link></li>
          <li className="option-list">
              <a href="#">course  
              <ul class="submenu">
              <li className='navbar'><a href="#">Member 1</a></li>
              <li className='navbar'><a href="#">Member 2</a></li>
              <li className='navbar'><a href="#">Member 3</a></li>
           </ul>
              </a>
          </li>
          <li className='navbar'><a href="#">Portfolio</a></li>
          <li className='navbar'><a href="#">Team</a></li>
          <li className='navbar'><a href="#">Contact</a></li>
        </ul>  
        </div>


    </div>
  )
}

export default Header
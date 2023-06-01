import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='navbar-container'>
        <ul className='navbar-holder'>
          <li className='navbar'><img id='logo' src="https://cyberpro-israel.co.il/wp-content/uploads/2021/01/CYBERPRO-Israel-Logo-Black.svg" alt="" /></li>
          <li className='navbar' ><Link to='/'>Home</Link></li>
          <li className="option-list">
              <a href="#" className='navbar'><Link to='/Courses'>courses</Link></a>  
              <ul class="submenu">
              <li className='list'><a href="#">Member 1</a></li>
              <li className='list'><a href="#">Member 2</a></li>
              <li className='list'><a href="#">Member 3</a></li>
           </ul>
          </li>
          <li className='navbar'><Link to = '/About'> About </Link></li>
          <li className='navbar'><a href="#">Team</a></li>
          <li className='navbar'><a href="#">Contact</a></li>
          <li className='navbar'><a href="#">Portfolio</a></li>
        </ul>  
        </div>


    </div>
  )
}

export default Header
import React from 'react'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
    <div className='logo'>
      <img src={logo} alt='logo-pic'/>
    </div>

    <div className='nav-item'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
    </div>

</div>
  )
}

export default Header

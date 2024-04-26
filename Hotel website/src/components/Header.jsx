import React from 'react'
import logo from '../image/logo.png'

const Header = () => {
  return (
    <div className='header'>
    <div className='logo'>
      <img src={logo} alt='logo-pic'/>
    </div>

    <div className='nav-item'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>

</div>
  )
}

export default Header

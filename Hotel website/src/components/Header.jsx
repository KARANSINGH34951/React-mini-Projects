import React from 'react'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utili/useOnlineStatus'

const Header = () => {
  const onlinestatus=useOnlineStatus()
  return (
    <div className='header'>
    <div className='logo'>
      <img src={logo} alt='logo-pic'/>
    </div>

    <div className='nav-item'>
      <ul>
        <li>Online Status : {onlinestatus ? "green":"red"}</li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
    </div>

</div>
  )
}

export default Header
// https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=229

import logo from '../image/logo.png'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utili/useOnlineStatus'
import {useSelector} from 'react-redux'

const Header = () => {
  const onlinestatus=useOnlineStatus()

  const cartitem=useSelector((Store)=>Store.cart.items)
  
  return (

    <div className='header flex justify-between px-3'>
    <div className='logo w-24'>
      <img src={logo} alt='logo-pic'/>
    </div>

    <div className='nav-item'>
      <ul className='flex'>
        <li className='p-4 m-3'>Online Status : {onlinestatus ? "green":"red"}</li>
        <li  className='p-4 m-3'><Link to='/'>Home</Link></li>
        <li  className='p-4 m-3'><Link to='/about'>About Us</Link></li>
        <li  className='p-4 m-3'><Link to='/contact'>Contact Us</Link></li>
        <li  className='p-4 m-3'><Link to='/cart' >Cart  - {cartitem.length}</Link></li>
        <li  className='p-4 m-3 border bg-black text-white'><Link to='/contact'><button>Login</button></Link></li>
        
      </ul>
    </div>

</div>
  )
}

export default Header

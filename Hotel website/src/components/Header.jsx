import logo from '../image/logo.png';
import { useState } from 'react'; // Import useState hook for managing state
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utili/useOnlineStatus';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

const Header = () => {
  const [showNav, setShowNav] = useState(false); // State to toggle navigation visibility
  const onlinestatus = useOnlineStatus();
  const cartitem = useSelector((Store) => Store.cart.items);

  return (
    <div className='header flex flex-col sm:flex-row justify-between items-center px-4 py-2 bg-gray-100 shadow-md'>
      <div className='logo w-24  mb-2 sm:mb-0'>
        <img src={logo} alt='logo-pic' className='w-full' />
      </div>

      
      <button
        className='block sm:hidden px-3 py-1 bg-black text-white rounded-md hover:bg-gray-700 ml-auto' // ml-auto aligns button to right
        onClick={() => setShowNav(!showNav)}
      >
        <FontAwesomeIcon icon={showNav ? faTimes : faBars} />
      </button>

      <div className={`nav-item ${showNav ? 'block' : 'hidden'} sm:flex sm:items-center`}>
        <ul className='flex flex-col sm:flex-row items-center'>
          <li className='p-2 sm:p-4'><span>Online Status:</span> <span>{onlinestatus ? "🟢" : "🔴"}</span></li>
          <li className='p-2 sm:p-4' ><Link to='/'>Home</Link></li>
          <li className='p-2 sm:p-4'><Link to='/about'>About Us</Link></li>
          <li className='p-2 sm:p-4'><Link to='/contact'>Contact Us</Link></li>
          <li className='p-2 sm:p-4'><Link to='/cart'>Cart - {cartitem.length}</Link></li>
          <li className='p-2 sm:p-4'>
            <Link to='/login'>
              <button className='px-3 py-1 bg-black text-white rounded-md hover:bg-gray-700'>Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

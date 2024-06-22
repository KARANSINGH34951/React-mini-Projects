import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-slate-800 text-white py-10 px-5'>
      <div className='footer-content flex flex-col md:flex-row justify-around items-center md:items-start'>
        <div className='contact-info p-5 m-5 md:w-1/3 xl:w-1/4'>
          <h3 className='my-1 font-semibold text-2xl text-center md:text-left'>Contact Us</h3>
          <p className='my-1 text-lg text-center md:text-left'>Email: example@example.com</p>
          <p className='my-1 text-lg text-center md:text-left'>Phone: 123-456-7890</p>
          <p className='my-1 text-lg text-center md:text-left'>123 Street Name, City, Country</p>
        </div>
        <div className='social-media p-5 m-5 md:w-1/3 xl:w-1/4'>
          <h3 className='my-1 font-extrabold text-2xl text-center md:text-left'>Connect with Us</h3>
          <ul className='flex justify-center md:justify-start space-x-4'>
            <li className='text-xl hover:text-blue-500'>
              <a href="#">
                <FaFacebook size={30} />
              </a>
            </li>
            <li className='text-xl hover:text-blue-400'>
              <a href="#">
                <FaTwitter size={30} />
              </a>
            </li>
            <li className='text-xl hover:text-blue-700'>
              <a href="#">
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div className='useful-links p-5 m-5 md:w-1/3 xl:w-1/4'>
          <h3 className='my-1 font-semibold text-2xl text-center md:text-left'>More Queries</h3>
          <ul className='text-center md:text-left'>
            <li className='my-1 text-lg'><a href="#" className='hover:underline'>FAQs</a></li>
            <li className='my-1 text-lg'><a href="#" className='hover:underline'>Terms of Service</a></li>
            <li className='my-1 text-lg'><a href="#" className='hover:underline'>Privacy Policy</a></li>
            <li className='my-1 text-lg'><a href="#" className='hover:underline'>Customer Support</a></li>
          </ul>
        </div>
      </div>
      <div className='copyright text-center mt-10'>
        <p>&copy; 2024  All rights reserved.</p>
        <p>
          <a href="#" className='hover:underline'>Privacy Policy</a> | <a href="#" className='hover:underline'>Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

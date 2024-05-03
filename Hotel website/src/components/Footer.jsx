import React from 'react'


const Footer = () => {
  return (
    <div className='w-full bg-slate-600 h-80 '>
      <div class="footer-content flex justify-around">
    <div class="contact-info p-5 m-5">
      <h3 className='my-1 font-semibold text-2xl'>Contact Us</h3>
      <p className='my-1 font-semibold  text-xl'>Email: example@example.com</p>
      <p className='my-1 font-semibold  text-xl'>Phone: 123-456-7890</p>
      <p className='my-1 font-semibold text-xl'>123 Street Name, City, Country</p>
    </div>
    <div class="social-media  p-5 m-5">
      <h3 className='my-1 font-extrabold text-2xl'>Connect with Us</h3>
      <ul>
        <li className='my-1 font-semibold text-xl'><a href="#">Facebook</a></li>
        <li className='my-1 font-semibold text-xl'><a href="#">Twitter</a></li>
        <li className='my-1 font-semibold text-xl'><a href="#">LinkedIn</a></li>
      </ul>
    </div>
    <div class="useful-links p-5 m-5">
      <h3  className='my-1 font-semibold text-2xl'>More Queries</h3>
      <ul>
        <li  className='my-1 font-semibold text-xl'><a href="#">FAQs</a></li>
        <li  className='my-1 font-semibold text-xl'><a href="#">Terms of Service</a></li>
        <li  className='my-1 font-semibold text-xl'><a href="#">Privacy Policy</a></li>
        <li  className='my-1 font-semibold text-xl'><a href="#">Customer Support</a></li>
      </ul>
    </div>
   
  </div>
  <div class="copyright text-center ">
    <p>&copy; 2024 Your Company. All rights reserved.</p>
    <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
  </div>
    </div>
  )
}

export default Footer

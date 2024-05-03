import React from 'react'
import img1 from '../image/img1.png'

const UserCard = () => {
  return (
    <div className='usercard h-40 w-96 bg-slate-700'>
      {/* <img className='rounded-full object-cover h-au w-full' src={img1} alt='img'/> */}
      <div className='text-center'>
        <h3>NAME:KARAN SINGH</h3>
        <h4>Location: Tamilndu</h4>
        <h5>welcome to about us</h5>
      </div>
    </div>
  )
}

export default UserCard

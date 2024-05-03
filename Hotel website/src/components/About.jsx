import React from 'react'
import UserCard from './UserCard'
import Counter from './Counter'


const About = () => {
  return (
    <div className='about '>
      <h1 className='text-center text-4xl font-bold'>About Us</h1>
      <Counter />
      <h1 className='text-center font-extrabold text-6xl'>Our Team</h1>
      <div className='px-24'>
          <UserCard username="kara singh"/>
      </div>
      


    </div>
  )
}


export default About

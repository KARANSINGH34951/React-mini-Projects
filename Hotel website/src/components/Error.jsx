import React from 'react'
import { useRouteError } from 'react-router-dom'
import errorimg from '../image/errorimg.jpeg'

const Error = () => {
  const err = useRouteError()
  console.log(err);
  return (
    <div>
      <img src={errorimg} alt='error-img' className='w-screen h-screen'/>
    </div>
  )
}

export default Error

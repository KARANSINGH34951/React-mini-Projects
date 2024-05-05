import React from 'react'
import Shimmercards1 from './Shimmercards1'

const Shimmercards = () => {
  return (
    <div className='shimmer-cards  p-10 m-4 h-auto w-full text-center'>

      <div className='search flex  items-center justify-center p-1 text-center'>
          <input className='rounded-md h-11 w-[350px] text-center border border-black' type='text' />

          <button className='mx-4 p-3 bg-black text-white rounded-md '><pre>  </pre></button>

      </div>

      <Shimmercards1 />
      <Shimmercards1 />
      <Shimmercards1 />

    </div>
  )
}

export default Shimmercards

import React from 'react'

 

const Card =({ cloudinaryImageId,
    name,
    area,
    costForTwo,
    avgRating,
    locality,

  })=>{

  
  return (
    
    <div className='res-card shadow-xl  rounded-lgb text-center h-[415px] '>
      <img
        alt='restaurant image' className='object-cover rounded-lg flex justify-center items-center h-[220px] w-full'
        src={
           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          cloudinaryImageId 
        }
      />
      <h1 className='font-extrabold p-1 m-2'>{name}</h1>
      <h4>Loaction : {locality}</h4>
      <h4>{area}</h4>
      <div className='flex justify-around items-center m-3'>
        {avgRating >4 ? <h4 className='bg-green-500 rounded-sm p-1'>Rating :{avgRating}</h4> : <h4 className='bg-red-600 rounded-sm p-1'>Rating : {avgRating}</h4>}

        {/* <h4>Rating : {avgRating}</h4> */}
        <h4 className='bg-yellow-300 rounded-sm p-1'>{costForTwo}</h4>
      </div>

      <button className=' border bg-black text-white rounded-lg p-2 hover:text-black hover:bg-gray-500'>Order Now</button>
    </div>
  )
}
 

export default Card

import React from 'react'

  
const Card =({ cloudinaryImageId,
    name,
    area,
    costForTwo,
    avgRating,
    locality,

  })=>{
  return (
    <div className='res-card'>
      <img
        alt='restaurant image'
        src={
           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          cloudinaryImageId 
        }
      />
      <h2>{name}</h2>
      <h4>{locality}</h4>
      <h4>{area}</h4>
      <span>
        <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>

        <h4>{costForTwo}</h4>
        <button>Order Now</button>
      </span>
    </div>
  )
}
 

export default Card

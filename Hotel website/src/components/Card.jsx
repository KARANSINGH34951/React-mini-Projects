import React from 'react';

const Card = ({
  cloudinaryImageId,
  name,
  area,
  costForTwo,
  avgRating,
  locality,
}) => {
  return (
    <div className='res-card shadow-xl rounded-lg text-center p-4 sm:p-6 md:p-6 lg:p-8 max-w-xs mx-auto items-stretch h-6/10'>
      <img
        alt='restaurant image'
        className='object-cover rounded-lg w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 mb-4'
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${cloudinaryImageId}`}
      />
      <h1 className='font-extrabold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl mt-2'>{name}</h1>
      <h4 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-1'>{locality}</h4>
      <h4 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>{area}</h4>
      <div className='flex flex-col sm:flex-row justify-center items-center mt-2'>
        <div className='flex items-center mb-2 sm:mb-0'>
          {avgRating > 4 ? (
            <h4 className='bg-green-500 rounded-sm p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mr-2'>
              Rating: {avgRating}
            </h4>
          ) : (
            <h4 className='bg-red-600 rounded-sm p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mr-2'>
              Rating: {avgRating}
            </h4>
          )}
        </div>
        <h4 className='bg-yellow-300 rounded-sm p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
          {costForTwo}
        </h4>
      </div>
      <button className='border bg-black text-white rounded-lg p-2 mt-4 hover:text-black hover:bg-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
        Order Now
      </button>
    </div>
  );
};

export default Card;

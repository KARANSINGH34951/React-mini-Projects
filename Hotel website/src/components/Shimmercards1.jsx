import React from 'react';

const Shimmercards1 = () => {
  return (
    <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='flex flex-col items-center mb-6'>
        <div className='text-center text-lg font-semibold mb-2 animate-bounce'>
          ⏳ Hold on, it will take a few seconds to load...
        </div>
        {/* <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div> */}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {[...Array(4)].map((_, index) => (
          <div key={index} className='animate-pulse shadow-xl rounded-lg text-center'>
            <div className='rounded-lg h-40 md:h-64 bg-gray-300'></div>
            <div className='flex items-center justify-around my-4'>
              <div className='font-extrabold p-1 m-2 border w-1/3 h-8 md:w-1/4 md:h-10 bg-gray-300'></div>
              <div className='font-extrabold p-1 m-2 border w-1/3 h-8 md:w-1/4 md:h-10 bg-gray-300'></div>
            </div>
            <div className='flex items-center justify-around my-2'>
              <div className='font-extrabold p-1 m-2 border w-1/3 h-8 md:w-1/4 md:h-10 bg-gray-300'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmercards1;

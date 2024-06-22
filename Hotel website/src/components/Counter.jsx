import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
  const [counter, setCounter] = useState(false);

  return (
    <div className='px-4 py-8 md:px-10 md:py-12'>
      <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
        <div className='flex flex-wrap justify-around items-center text-center'>
          <div className='m-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
              {counter && <CountUp start={0} end={10000} duration={4} />}+
            </h2>
            <p className='py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>Happy customers</p>
          </div>
          <div className='m-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
              {counter && <CountUp start={0} end={1000} duration={4} />}+
            </h2>
            <p className='py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>Hotels</p>
          </div>
          <div className='m-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
              {counter && <CountUp start={0} end={765} duration={4} />}+
            </h2>
            <p className='py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>Personal Offices</p>
          </div>
          <div className='m-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
              {counter && <CountUp start={0} end={22} duration={6} />}+
            </h2>
            <p className='py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>State Access</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default Counter;

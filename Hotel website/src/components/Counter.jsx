import React from 'react'
import { useState } from 'react'
import CountUp from 'react-countup'
import  ScrollTrigger  from 'react-scroll-trigger'


const Counter = () => {
  const [counter, setCounter] = useState(false)
  return (
    <div className='px-10 py-12'>
       <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
        <div className=' flex justify-around items-center text-center px-20 '>
          <di >
            <h2 className='text-6xl font-bold '> 
              {counter && <CountUp start={0} end={10000} duration={4}/>}+</h2>
            <p className='py-2 text-4xl'>Happy customers</p>
          </di>
          <div>  
            <h2 className='text-6xl font-bold '> 
              {counter && <CountUp start={0} end={1000} duration={4}/>}+</h2>
            <p className='py-2 text-4xl'>Hotels</p>
          </div>
          <div>
            <h2 className='text-6xl font-bold '> 
              {counter && <CountUp start={0} end={765} duration={4}/>}+</h2>
            <p className='py-2 text-4xl'>Personal Offices</p>
          </div>
          <div>
            <h2 className='text-6xl font-bold '> 
              {counter && <CountUp start={0} end={22} duration={6}/>}+</h2>
            <p className='py-2 text-4xl'>State Access</p>
          </div>
          

        

      
        </div>
       </ScrollTrigger>
    
    </div>
  )
}

export default Counter

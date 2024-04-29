import React, { useEffect } from 'react'
import Shimmercards from './Shimmercards'
import {useState} from 'react'

const Restaurantmenu = () => {
  const [resinfo,setresinfo]=useState(null)

  useEffect(()=>{
      fetchmenu()
  },[])

  const fetchmenu = async () => { 
    const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.3581441&lng=77.7135612&restaurantId=220269&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER')
    const json =await data.json()
    console.log(json);
  }
  // https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=
  if(resinfo===null){
    <Shimmercards/>
  }

  return (
    <div className='menu'>
      <h1>Name of res</h1>
      <h3>menu</h3>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  )
}

export default Restaurantmenu

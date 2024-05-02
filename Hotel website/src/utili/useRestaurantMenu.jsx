import React from 'react'
import {useState,useEffect} from 'react'

const useRestaurantMenu = (resid) => {
  const [resinfo,setresinfo]=useState(null)

  useEffect(()=>{
    fetchmenu()
},[])

const fetchmenu = async () => { 
  const data=await fetch('https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId='+resid)
  const json =await data.json()
  setresinfo(json.data)
  console.log(resinfo);
}
  
  return resinfo
}

export default useRestaurantMenu

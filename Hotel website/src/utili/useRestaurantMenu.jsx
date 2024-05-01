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
 
  // console.log(json.data.cards[2]?.card?.card?.info);
  // console.log(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.id);

  setresinfo(json.data)
  // console.log(resinfo);
  // let {itemcard} =json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info

  // let {itemcard} =json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info 
}
  
  return resinfo
}

export default useRestaurantMenu

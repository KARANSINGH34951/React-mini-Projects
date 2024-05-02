import React from 'react'
import { useState ,useEffect} from 'react'

const useRestaurant = () => {
  const [listofres,setlistofres]=useState([])

  useEffect(()=>{
    fetchdata()
},[])


async function fetchdata(){
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3581441&lng=77.7135612&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
 
  const jsons = await data.json()

   setlistofres(jsons?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //  console.log(jsons?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle); 

  }

  return listofres
}

export default useRestaurant

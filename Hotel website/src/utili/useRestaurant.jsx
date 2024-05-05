import React from 'react'
import { useState ,useEffect} from 'react'

const useRestaurant = () => {
  const [listofres,setlistofres]=useState([])

  useEffect(()=>{
    let lon , lat;
    navigator.geolocation.getCurrentPosition(async (result) => {
      console.log(result);
      const l = result.coords;

      // Object.entries(result)
      lon = l.longitude;
      lat = l.latitude;
      console.log(lon);
      console.log(lat);
    });
    fetchdata()
},[])


async function fetchdata(){
  const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
 
  const jsons = await data.json()

   setlistofres(jsons?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 
  }

  return listofres
}

export default useRestaurant

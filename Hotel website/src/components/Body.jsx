import React, { useEffect, useState } from 'react'
import Card from './Card'
import restaurantList from '../utili/Data'

const Body = () => {
  const [listofres,setlistofres]=useState([])

  useEffect(()=>{
   fetchdata()
  },[])

  const fetchdata= async()=>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3581441&lng=77.7135612&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
   
    const jsons = await data.json()

    console.log(jsons.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
     setlistofres(jsons?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
  }

  if(listofres.length===0){
    return <h1>Loading...</h1>
  }
 
  return (
    <div className='boby'>

      <div className='filter'>
          <button className='filter-btn' onClick={()=>{
            const filteredlist=listofres.filter((restaurant)=>restaurant.info.avgRating>4)
            setlistofres(filteredlist)
            console.log(filteredlist);          
          }}>Top Rated </button>
      </div>

      <div className='card-container'>
        {listofres.map((restaurant,index) => {
          return(
            <Card key={index} {...restaurant?.info} />
          )
        })} 
      </div>

    </div>
  )
}

export default Body

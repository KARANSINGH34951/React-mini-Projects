import React, { useEffect, useState } from 'react'
import Card from './Card'
import restaurantList from '../utili/Data'
import Shimmercards from './Shimmercards'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../utili/useOnlineStatus'
import useRestaurant from '../utili/useRestaurant'

const Body = () => {
  
  const [searchinput,setsearchinput]=useState('')
const listofres = useRestaurant()
 

// console.log(listofres);
    const onlinestatus=useOnlineStatus()

    if(onlinestatus===false){
      return <h1>you are offline</h1>
    }
  
  return ( 
    !listofres || listofres.length === 0 ?
    <div className='shimmer-container'>
          <Shimmercards />
           <Shimmercards />
    </div> :

     <div className='boby'>
 
      <div className='filter'>

        <div className='search'>
            <input type='text' placeholder='search for food' value={searchinput} onChange={(e)=>{
              setsearchinput(e.target.value)
            }}/>

            <button 
            onClick={()=>{
              const searchedlist = listofres.filter((res)=>{
                return res.info.name.toLowerCase().includes(searchinput.toLowerCase());  
              });
              setlistofres(searchedlist);
            }}>Search</button>

        </div>  


          <button className='filter-btn' onClick={()=>{
            const filteredlist=listofres.filter((restaurant)=>restaurant.info.avgRating>4)
            setlistofres(filteredlist)
            console.log(filteredlist);          
          }}>Top Rated </button>
      </div>

      <div className='card-container'>
        {listofres.map((restaurant) => {
          return(
           <Link key={restaurant.info.id} to={'/restaurant/'+restaurant.info.id}>
              <Card  {...restaurant?.info} />
            </Link>
          )
        })} 
      </div>

    </div>
  )
}

export default Body
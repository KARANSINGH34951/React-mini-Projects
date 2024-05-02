import React, { useEffect } from 'react'
import Shimmercards from './Shimmercards'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import useRestaurantMenu from '../utili/useRestaurantMenu'


const Restaurantmenu = () => {
  // const [resinfo,setresinfo]=useState(null)
    const {id} = useParams()
   
    const resinfo= useRestaurantMenu(id)
   
    if(resinfo===null){
      return <Shimmercards/>
    }


  const {name,cuisines,costForTwoMessage}=resinfo.cards[2].card.card.info
  const {itemcard} =resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  
 
  return (
    <div className='menu'>
      {/* <h1>{resinfo.cards[2].card.card.info.name}</h1> */}

      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {/* <li>{itemcards}</li> */}
        {/* <li>{itemcard.itemCards[3].card.info.name}</li> */}
       {
        itemcard && itemcard.map((res,index)=>{
            return(
              <li key={index}>{res.card.info.name}</li>
            )
        })
       }
       
      </ul>
    </div>
  )
}

export default Restaurantmenu

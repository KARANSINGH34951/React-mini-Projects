import React, { useEffect } from 'react'
import Shimmercards from './Shimmercards'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import useRestaurantMenu from '../utili/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'


const Restaurantmenu = () => {
  // const [resinfo,setresinfo]=useState(null)
    const {id} = useParams()
   
    const resinfo= useRestaurantMenu(id)
   
    if(resinfo===null){
      return <Shimmercards/>
    }


  const {name,cuisines,costForTwoMessage}=resinfo.cards[2].card.card.info
  const {itemcard} =resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  const categories =
  resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory '
    );

  //  console.log(categories);

  
 
  return (
    <div className='menu text-center'>
      {/* <h1>{resinfo.cards[2].card.card.info.name}< /h1> */}

      <h1 className='font-bold text-2xl my-5'>{name}</h1>
      <h3 className='font-bold text-2xl my-5'>{cuisines.join(", ")}</h3>
      <h3 className='font-bold text-2xl my-5'>{costForTwoMessage}</h3>
      <ul>
        {/* <li>{itemcards}</li> */}
        {/* <li>{itemcard.itemCards[3].card.info.name}</li> */}

        {
          categories.map((category)=>{
            <RestaurantCategory  />
          })
        }
       {/* {
        itemcard && itemcard.map((res,index)=>{
            return(
              <li key={index}>{res.card.info.name}</li>
            )
        })
       } */}
       
      </ul>
    </div>
  )
}

export default Restaurantmenu

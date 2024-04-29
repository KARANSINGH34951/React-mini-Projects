import React, { useEffect } from 'react'
import Shimmercards from './Shimmercards'
import {useState} from 'react'

const Restaurantmenu = () => {
  const [resinfo,setresinfo]=useState(null)

  useEffect(()=>{
      fetchmenu()
  },[])

  const fetchmenu = async () => { 
    const data=await fetch('https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=186141')
    const json =await data.json()
    // https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=186141
    console.log(json.data.cards[2]?.card?.card?.info);

    setresinfo(json.data)
  }
  
  if(resinfo===null){
    return <Shimmercards/>
  }
 

  const {name,cuisines,costForTwoMessage}=resinfo.cards[2].card.card.info
  // const {itemcard}=resinfo.cards[2]
  const {itemcard}=resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.name
 

  return (
    <div className='menu'>
      {/* <h1>{resinfo.cards[2].card.card.info.name}</h1> */}

      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        <li>{resinfo.cards[2].card.card.info.name}</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  )
}

export default Restaurantmenu

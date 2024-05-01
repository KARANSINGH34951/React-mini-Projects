import React, { useEffect } from 'react'
import Shimmercards from './Shimmercards'
import {useState} from 'react'
import {useParams} from 'react-router-dom'


const Restaurantmenu = () => {
  const [resinfo,setresinfo]=useState(null)


    const {id} = useParams()
   
    useEffect(()=>{
      fetchmenu()
  },[])

  const fetchmenu = async () => { 
    const data=await fetch('https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId='+id)
    const json =await data.json()
   
    // console.log(json.data.cards[2]?.card?.card?.info);
    // console.log(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.id);

    setresinfo(json.data)
    // console.log(resinfo);
    // let {itemcard} =json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info

    // let {itemcard} =json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info 
  }

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

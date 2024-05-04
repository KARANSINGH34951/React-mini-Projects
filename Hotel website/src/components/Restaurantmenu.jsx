// import React, { useEffect } from 'react'
import Shimmercards from './Shimmercards'
import {useParams} from 'react-router-dom'
import useRestaurantMenu from '../utili/useRestaurantMenu'
// import RestaurantCategory from './RestaurantCategory'
import { addToCart } from '../utili/Cartslice'
import { useDispatch } from 'react-redux'


const Restaurantmenu = ({item}) => {
  
  const dispatch=useDispatch()

    const handleitem=(item)=>{
      dispatch(addToCart(item))
    }

    const {id} = useParams()
   
    const resinfo= useRestaurantMenu(id)
   
    if(resinfo===null){
      return <Shimmercards/>
    }
  const {name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating
  }=resinfo.cards[2].card.card.info

  console.log(resinfo.cards[5].
    groupedCard.
    cardGroupMap.
    REGULAR.cards[2].card.card);
   const { itemCards } = resinfo.cards[5].
    groupedCard.
    cardGroupMap.
    REGULAR.cards[2].card.card
  // console.log(itemCards);
 
  return (
    <div className='menu text-center'>
      {/* <h1>{resinfo.cards[2].card.card.info.name}< /h1> */}
      <h4>{avgRating}</h4>
      <h1 className='font-bold text-2xl my-5'>{name}</h1>
      {/* <h2  className='font-bold text-2xl my-5'>{offer}</h2> */}
      <h3 className='font-bold text-2xl my-5'>{cuisines.join(", ")}</h3>
      <h3 className='font-bold textr-2xl my-5'>{costForTwoMessage}</h3>
      

      <img
        alt='restaurant image' className='object-cover rounded-lg flex justify-center items-center h-[220px] w-full'
        src={
           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          cloudinaryImageId 
        }
      />

      <p className='text-2xl'>{itemCards.title}</p>

      <ul>

      {itemCards.map(item =>
                <li key={item.card.info.id}>
                    {item.card.info.name} - {' Rs.'}
                    {item.card.info.price / 100}
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId} alt='img'/>

                    <h2>{item.card.info.category}</h2>

                    <button onClick={handleitem}>ADD+</button>
                </li>
// {item.card.info.
  // imageId}
              )
      }
        {/* <li>{itemcards}</li> */}
        {/* <li>{itemcard.itemCards[3].card.info.name}</li> */}
 
      
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

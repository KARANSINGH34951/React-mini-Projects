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
        <h1 className='font-bold text-4xl my-5'>{name}</h1>
      <div className='flex  justify-center items-center'>
      <img
        alt='restaurant image' className='object-cover rounded-lg flex justify-center items-center h-[220px] w-[40%]'
        src={
           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          cloudinaryImageId 
        }/>
      <div className='mx-10'>
      
        <h3 className='font-bold text-2xl my-5'>{cuisines.join(", ")}</h3>
        <h4>Avg Rating : {avgRating}</h4>
        <h3 className='font-bold textr-2xl my-5'>{costForTwoMessage}</h3>
        <button className='border border-black rounded-md p-2 bg-black text-white'>Buy Now</button>
      </div> 
      
      </div>
      <h1 className='font-bold text-4xl my-5'>Menu</h1>

      <ul className='flex-row py-10  px-20 border border-black bg-orange-200'>

      <div className=' border border-black'>
      {itemCards.map(item =>
                <li  key={item.card.info.id}>
                  <div className='py-10 px-10 md:px-36 lg:px-40 grid grid-cols-2 justify-around items-center'>  
                    <div>
                        <img className='inline-block ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId} alt='img'/>
                    </div>

                    <div className='inline-block'>
                    {item.card.info.name} - {' Rs.'}
                      {item.card.info.price / 100}
                      <h2>{item.card.info.category}</h2>
                      <button className='border border-black rounded-md bg-black text-white p-2' onClick={handleitem}>ADD+</button>
                   </div>
                   </div>
                    
                </li>
              )
      }

      </div>
      
      
       
      </ul>
    </div>
  )
}

export default Restaurantmenu

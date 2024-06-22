import React from 'react'
import Shimmercards from './Shimmercards'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utili/useRestaurantMenu'
import { addToCart } from '../utili/Cartslice'
import { useDispatch } from 'react-redux'

const Restaurantmenu = () => {
  const dispatch = useDispatch()

  const handleItem = (item) => {
    dispatch(addToCart(item))
    console.log(item)
  }

  const { id } = useParams()
  const resinfo = useRestaurantMenu(id)

  if (resinfo === null) {
    return <Shimmercards />
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating
  } = resinfo.cards[2].card.card.info

  const { itemCards } = resinfo.cards[5]
    .groupedCard
    .cardGroupMap
    .REGULAR.cards[2].card.card

  return (
    <div className='menu text-center'>
      <h1 className='font-bold text-4xl my-5'>{name}</h1>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <img
          alt='restaurant'
          className='object-cover rounded-lg h-48 w-full md:h-56 md:w-1/3'
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${cloudinaryImageId}`}
        />
        <div className='mx-4 my-4 md:my-0'>
          <h3 className='font-bold text-2xl'>{cuisines.join(", ")}</h3>
          <h4 className='text-xl mt-2'>Avg Rating: {avgRating}</h4>
          <h3 className='font-bold text-xl mt-2'>{costForTwoMessage}</h3>
          <button className='border border-black rounded-md p-2 mt-4 bg-black text-white'>Buy Now</button>
        </div>
      </div>
      <h1 className='font-bold text-4xl my-5'>Menu</h1>

      <ul className='flex flex-col items-center space-y-4'>
        {itemCards.map(item => (
          <li key={item.card.info.id} className='w-full md:w-2/3'>
            <div className='py-4 px-6 flex justify-between items-center bg-orange-200 border border-black rounded-lg'>
              <div className='flex items-center space-x-4'>
                <img
                  className='h-20 w-20 object-cover rounded-md'
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                  alt='item'
                />
                <div>
                  <h2 className='font-semibold text-lg'>{item.card.info.name} - Rs.{item.card.info.price / 100}</h2>
                  <p className='text-sm'>{item.card.info.category}</p>
                </div>
              </div>
              <button
                className='border border-black rounded-md bg-black text-white p-2'
                onClick={() => handleItem(item)}
              >
                ADD+
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Restaurantmenu

import React from 'react'
import { useSelector } from 'react-redux'

import ItemList from '../components/Itemlist'
// import {useSelector,useDispatch} from 'react-redux'
// import {removeFromCart} from '../utils/cartSlice'


const Cart = () => {
  const cartitem=useSelector((store)=>store.cart.items)
  return (
    <div className='text-center m-4 p-4'>

      <h1 className='font-bold text-2xl'>Cart</h1>
      
      <div>
        <ItemList items={cartitem} />
      </div>
    </div>


  )
}

export default Cart

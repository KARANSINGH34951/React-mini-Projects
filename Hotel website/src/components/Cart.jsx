import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ItemList from '../components/Itemlist'
import { clearCart } from '../utili/Cartslice'
// import {useSelector,useDispatch} from 'react-redux'
// import {removeFromCart} from '../utils/cartSlice'


const Cart = () => {
  const dispatch=useDispatch()

  const handleclearcart=()=>{
    // console.log('clear cart');
    dispatch(clearCart())
  }
  const cartitem=useSelector((store)=>store.cart.items)
  return (
    <div className='text-center m-4 p-4'>

      <h1 className='font-bold text-2xl'>Cart</h1>
      
      <div>
        <div className='text-right'>
        <button className='p-2 m-2 bg-black text-white text-right' onClick={handleclearcart}>Clear Cart</button>
        </div>
        <h2 className='p-10 m-5'>{cartitem.length===0 && <h1>Cart is Empty</h1> }</h2>
        <ItemList items={cartitem} />
      </div>
    </div>


  )
}

export default Cart

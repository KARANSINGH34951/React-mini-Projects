import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const Cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers:{
    addToCart: (state, action) => {
      state.items.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.items.pop()
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  }
})
 
export const { addToCart, removeFromCart, clearCart } = Cart.actions;

export default Cart.reducer;

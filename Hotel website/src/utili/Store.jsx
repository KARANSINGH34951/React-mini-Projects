import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import Cartreducer from './Cart'


const Store = configureStore({
  reducer: {
    cart: Cartreducer,
  }, 
});

export default Store

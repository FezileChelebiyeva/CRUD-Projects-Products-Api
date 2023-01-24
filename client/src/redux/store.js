import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slice/dataSlice'
import  wishListReducer  from './slice/wishlistslice'

export const store = configureStore({
  reducer: {
    products: dataReducer,
    product: wishListReducer
  },
})
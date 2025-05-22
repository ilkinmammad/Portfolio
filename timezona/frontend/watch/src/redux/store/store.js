import { configureStore } from '@reduxjs/toolkit'
import Products from '../../components/products/Products'
import  productSlice  from '../features/productSlice'
import  basketSlice  from '../features/basketSlice'
import  wishlistSlice  from '../features/wishlistSlice'

export const store = configureStore({
  reducer: {
    products : productSlice ,
    basket : basketSlice,
    wishlist : wishlistSlice
  },
})
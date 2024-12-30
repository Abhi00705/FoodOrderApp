//1st step intall reduxjs/tookit.
//2nd step import configureStore
//3rd step import reducer
import { configureStore } from '@reduxjs/toolkit' 
import cartReducer from '../feature/cart/cart';


export const store = configureStore({
    reducer: cartReducer
});
import {createSlice} from '@reduxjs/toolkit';
import { initialState } from '../initialState/initialState';


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
       ADD: (state,action) => {
           state.map(product => {
               if(product.id !== action.payload.id){
                   return product
               }else
               return{
                   ...product,
                   addded: true,
               }
           })
       }
    }
})
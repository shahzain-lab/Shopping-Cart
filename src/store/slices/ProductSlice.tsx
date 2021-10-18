import {createSlice} from '@reduxjs/toolkit';
import { initialState } from '../initialState/initialState';


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
       ADD: (state,action) => {
          return state.map(product => {
               if(product.id !== action.payload.id){
                   return product
               }else
               return{
                   ...product,
                   added: true,
               }
           })
       },
       DELETE:(state,action) => {
           return state.map(product => {
            if(product.id !== action.payload){
                   return product
            }else
            return{
                ...product,
                added: false,
            }
           })
       },
       INCREMENT: (state,action) => {
         return state.map(product => {
               if(product.id !== action.payload){
                   return product
               }else 
               return{
                   ...product,
                   count: product.count + 1,
               }
           })
       },
       DECREMENT: (state , action)=>{
           return state.map(product => {
               if(product.id !== action.payload){
                 return product
               }else
               return{
                   ...product,
                   count: product.count - 1,
               }
           })
       }
    }
});


export const {ADD ,DELETE ,INCREMENT ,DECREMENT} = productSlice.actions;

export default productSlice.reducer;
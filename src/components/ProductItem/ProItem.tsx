import React from 'react';
import { useSelector } from 'react-redux';
import { ProductTypes } from '../../types/Producttypes';
//imgs
import gucciCart from '../../images/gucciCart.jpg';

interface ProductType{
    products: ProductTypes[];
}

export const ProductItem = () => {
   
    const { products } = useSelector((state: ProductType) => state);
   const productFilter = products.filter(
     product => product.added === true
   )
    return (
        <div>
           <div>
               <img src={gucciCart} alt="gucci"/>
               </div>         
        </div>
    )
}

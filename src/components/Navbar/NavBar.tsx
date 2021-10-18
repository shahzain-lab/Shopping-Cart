import React from 'react';
//imgs
import gucci from '../../images/gucci.png';
import shoppingCart from '../../images/shoppingCart.png';
//css
import '../bascket.css';
///toolkit
import { useSelector } from 'react-redux';
import { ProductTypes } from '../../types/Producttypes';
///react router dom 
import { Link } from 'react-router-dom';

interface ProductType{
    products: ProductTypes[];
}

export const NavBar =()=> {
    
    const {products} = useSelector((state: ProductType) => state);
    const filterItem = products.filter((product) => 
        product.added === true
    ).length
    return(
        <Link to="/bascket">
          
            <nav className="navbar nav navbar-expand-lg navbar-dark bg-dark">
        <img src={gucci} alt="gucci logo" className="my-! mx-3" width="70rem"/>

        <div className="navCart">
        
        <img src={shoppingCart} className=" cart" alt="cart"/>
    <p>{filterItem}</p>
        </div>
</nav>
        </Link>
    )
}
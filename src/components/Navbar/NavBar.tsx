import React from 'react';
//imgs
import gucci from '../../images/gucci.png';
import shoppingCart from '../../images/shoppingCart.png';
//css
import '../bascket.css';

export const NavBar =()=> {
    return(
        <div>
          
            <nav className="navbar nav navbar-expand-lg navbar-dark bg-dark">
        <img src={gucci} alt="gucci logo" className="my-! mx-3" width="70rem"/>

        <div className="navCart">
        <img src={shoppingCart} className=" cart" alt="cart"/>
        </div>
</nav>
        </div>
    )
}
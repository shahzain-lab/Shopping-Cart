import React from 'react';
//imgs
import gucci from '../../images/gucci.png';

export const NavBar =()=> {
    return(
        <div>
          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="collapse navbar-collapse" id="navbarColor02">
        <img src={gucci} alt="gucci logo" className="my-2 mx-3" width="70rem"/>
        <img src={shopping-cart} alt="cart"/>
  </div>
</nav>
        </div>
    )
}
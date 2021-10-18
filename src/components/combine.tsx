import React from 'react'
import { NavBar } from './Navbar/NavBar'
import { Product } from './products/Products'

export const CombineComponents = () => {
    return (
        <div>
            <NavBar />
            <Product />
        </div>
    )
}

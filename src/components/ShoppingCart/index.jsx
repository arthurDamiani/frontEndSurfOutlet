import React, { useState } from 'react'
import './shoppingCart.css'
import CartSubTotal from '../CartSubTotal'
import { useStateValue } from '../../Context/StateProvider'
import CartProduct from '../CartProduct'

export default function Cart() {
    const [{ cart }, dispatch] = useStateValue()
     

    return (
        <div className="cart-wrapper">
            <div className="cart-left">
                <h2 className='cart-title'>Cart title</h2>   

                {cart.map(item => (
                    <CartProduct />         
                ))}
                
            </div> 
            <div className="cart-right">
                <CartSubTotal />
            </div>
        </div>
    )
}
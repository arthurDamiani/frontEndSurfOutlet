import React, { useState } from 'react'
import './shoppingCart.css'
import CartSubTotal from '../CartSubTotal'
import { useStateValue } from '../../contexts/StateProvider'
import CartProduct from '../CartProduct'

export default function Cart() {
    const [{ cart }, dispatch] = useStateValue()
     

    return (
        <div className="cart-wrapper">
            <div className="cart-left">
                <h3 className='cart-title'>Carrinho</h3>   

                {cart.map(item => (
                    <CartProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        size={item.size}
                        image={item.image}
                    />         
                ))}
                
            </div> 
            <div className="cart-right">
                <CartSubTotal />
            </div>
        </div>
    )
}
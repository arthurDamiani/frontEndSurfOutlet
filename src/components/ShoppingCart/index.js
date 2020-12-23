import React, { useState } from 'react'
import './shoppingCart.css'

export default function Cart({cart, removeFromCart}) {
    const [amount, setAmount] = useState(0)

    return (
        <div className="cart-wrapper">
            <h1>Cart</h1>
            {cart.map(product => {
            return (
                <div className="cart" key={product.id}>
                    <div className="details-prod">
                        <img src={product.image} alt='imagem do produto'/>
                        <h3>{product.title}</h3>
                        <p className='price'>R${product.price}</p>
                        <p className='size'>{product.size}</p>
                        <button onClick={() => removeFromCart(product)}>Remover</button>
                        
                    </div>
                    <div className="finish-buy">
                        <p className='payment'>{product.condition_payment}</p>
                        <p className='discount'>{product.discount}</p>
                        <p className='amount'>{amount}</p>
                        <button>Finalizar compra</button>
                    </div>
                </div>
            )
            })}
        </div>
    )
}
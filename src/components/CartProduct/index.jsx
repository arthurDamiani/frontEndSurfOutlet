import React, { useState } from 'react'
import { useStateValue } from '../../contexts/StateProvider'


function CartProduct({id, image, title, price, size}) {
    const [amount, setAmount] = useState(0)

    const [{ cart }, dispatch] = useStateValue()

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <p>{size}</p>
            <img src={image} alt='produto'/>
            <div className="amount">
                <button onClick={() => setAmount(amount > 0 ? amount - 1 : amount)}>-</button>
                    {amount}
                <button onClick={() => setAmount(amount + 1)}>+</button>
            </div>
            <button onClick={removeFromCart}>Remover</button>
        </div>
    )
}

export default CartProduct

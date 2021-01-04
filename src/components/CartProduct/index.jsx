import React from 'react'

function CartProduct({id, image, title, price, size}) {
    return (
        <div>
            <p>{title}</p>
            <img src={image} alt='produto'/>
            <button>Remover</button>
        </div>
    )
}

export default CartProduct

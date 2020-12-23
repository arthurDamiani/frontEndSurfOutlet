import React from 'react';
import { useState } from 'react';
import productCard  from './productCard'
import './productCard.css'
import ShoppingCart from '../ShoppingCart'

const ProductCardList = () => {
    const page_prod = 'products'
    const page_cart = 'cart'

    const [cart, setCart] = useState([])
    const [products] = useState(...productCard)
    const [page, setPage] = useState(page_prod)

    const addToCart = product => setCart([...cart, {...product}])

    const removeFromCart = productToRemove => setCart(cart.filter(product => product !== productToRemove))

    const navigateTo = nextPage => setPage(nextPage)


    const renderProducts = [
        <div className='products-wrapper'>
            <div className="products">
                {productCard.map(product => {
                return (
                    <div className="card-grid" key={product.id}>
                        <div className="img-content">
                            <img src={product.image} alt='imagem do produto'/>
                            <button onClick={() => addToCart(product)}>Ver detalhes</button>
                        </div>
                        <div className="content">
                            <h3>{product.title}</h3>
                            <p className='price'>R${product.price}</p>
                            <p className='payment'>{product.condition_payment}</p>
                            <p className='discount'>{product.discount}</p>
                        </div>
                    </div>
                )
                })}
            </div>
        </div>
    ]

    return ( 
        <div>
            <header>
                <button onClick={() => navigateTo(page_cart)}>Go to Cart ({cart.length})</button>
                <button onClick={() => navigateTo(page_prod)}>X</button>
            </header>
            {page === 'products' && renderProducts}
            {page === 'cart' && 
                <ShoppingCart 
                    removeFromCart={removeFromCart}
                    cart={cart} 
                />
            }
        </div>
    )
}

export default ProductCardList
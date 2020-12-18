import React from 'react';
import productCard  from './productCard'
import './productCard.css'

const ProductCardList = () => {
    return ( 
        <div className='products-wrapper'>
            <div className="products">
                {productCard.map(product => {
                return (
                    <div className="card" key={product.id}>
                        <div className="img-content">
                            <img src={product.image} alt='imagem do produto'/>
                            <button>Ver detalhes</button>
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
    )
}

export default ProductCardList
import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../contexts/StateProvider'

function Product({id, title, image, price, condition_payment, discount}) {
    const [{ cart }, dispatch] = useStateValue()

    console.log(cart)

    const addToCart = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
            },
        })
    }


    return (
        <div className="card-grid" key={id}>
            <div className="img-content">
                <img src={image} alt='imagem do produto'/>
                <Link to='detailsProducts'>
                    <button onClick={addToCart}>Ver detalhes</button>
                </Link>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p className='price'>R${price}</p>
                <p className='payment'>{condition_payment}</p>
                <p className='discount'>{discount}</p>
            </div>
        </div>
    )
}

export default Product
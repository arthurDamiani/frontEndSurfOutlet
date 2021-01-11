import React from 'react'
import './product.css'
import {Link}  from 'react-router-dom'

import { connect } from 'react-redux'

 import { formatPrice } from '../../services/util'
import { addProduct } from '../../services/cart/actions'

function Product({product, addProduct}) {
  
    product.quantity = 1

    let formattedPrice = formatPrice(product.price, product.currencyId)

    let productInstallment

    if (!!product.installments) {
        const installmentPrice = product.price / product.installments

        productInstallment = (
        <div className="installment">
            <span>ou {product.installments} x</span>
            <b>
            {product.currencyFormat}
            {formatPrice(installmentPrice, product.currencyId)}
            </b>
        </div>
        )
    }


    return (
        <div className="card-grid" key={product.id}>
            <div className="img-content">
                <img src={product.image} alt={product.title}/>
                <Link to={`detailsProduct/${product.id}`}>
                    <button onClick={() => addProduct(product)}>Ver detalhes</button>
                </Link>
            </div>
            <div className="content">
                <h3>{product.title}</h3>
                <div className='price'>
                    <small>{product.currencyFormat}</small>        
                    <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
                    <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
                    {productInstallment}
                </div>
                <p className='discount'>{product.discount}</p>
            </div>
        </div>
    )
}

export default connect(
    null,
    { addProduct }
  )(Product)
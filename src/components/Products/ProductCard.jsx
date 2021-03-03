import React from 'react'
import './productCard.css'
import { useDispatch } from 'react-redux'
import { clearFilters } from '../../actions/filters'

import {Link}  from 'react-router-dom'
import NumberFormat from 'react-number-format'
 
function Product({product}) {
  
    const dispatch = useDispatch()

    product.quantity = 1

    let productInstallment

    if (!!product.installments) {
        const installmentPrice = product.price / product.installments

        productInstallment = (
        <div className="installment">
            <span>ou até {product.installments}x </span>
            <b>
            {product.currencyFormat}
            {installmentPrice.toFixed(2)}
            </b>
        </div>
        )
    }

    return (
        <div className="card-grid" key={product.id}>
            <div className="img-content">
                <img src={product.imageThumbnail} alt={product.title}/>
                <Link to={`/detailsProducts/${product.codigo}`} onClick={() => dispatch(clearFilters())}>
                    <button>Ver detalhes</button>
                </Link>
            </div>
            <div className="content">
            {/* h3 */}
                <h6>{product.title}</h6> 
                <div className='price'>
                    <NumberFormat value={(product.preco)} displayType={'text'} decimalScale={2} thousandSeparator={true} prefix={'R$'} />
                    {productInstallment}
                </div>
                <p className='discount'>{product.discount}</p>
            </div>
        </div>
    )
}

export default Product
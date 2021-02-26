import React, { Fragment, useState } from 'react'

import { useDispatch } from 'react-redux'

import Thumb from './../../Thumb'

import { addToCart, removeFromCart, decrementFromCart } from '../../../actions/products'

function CartProduct({products}) {

  const [isMouseOver, setIsMouseOver] = useState(false)
  const [product, setProduct] = useState(products)

  const handleMouseOver = () => setIsMouseOver(true)
  
  const handleMouseOut = () => setIsMouseOver(false)

  const dispatch = useDispatch()

  const classes = ['shelf-item']

  if (!!isMouseOver) {
    classes.push('shelf-item--mouseover')
  }

    return (
      <Fragment>
        <div className={classes.join(' ')}>
            <div
              className="shelf-item__del"
              onMouseOver={() => handleMouseOver()}
              onMouseOut={() => handleMouseOut()}
              onClick={() => dispatch(removeFromCart(product.id))}
            />
            <Thumb
              src={product.image}
              alt={product.title}
            />
            <div className="shelf-item__details">
              <p className="title-cart">{product.descricao}</p>
              <p className="desc">
                {product.style}<br /> 
                Tamanho: {product.size}<br />
                Quantidade: {product.quantity}
              </p>
            </div>
            <div className="shelf-item__price">
              <p>{parseFloat(product.preco)}</p> 
                <div>
                  <button onClick={() => dispatch(decrementFromCart(product.id))} disabled={product.quantity === 1 ? true : false} className="change-product-button">-</button>
                  <button onClick={() => dispatch(addToCart({...product}))} className="change-product-button">+</button>
                </div>
            </div>
        </div>
      </Fragment>
      
    )
  }

export default CartProduct

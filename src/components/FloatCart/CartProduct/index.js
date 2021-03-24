import React, { Fragment, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Thumb from './../../Thumb'

import { removeFromCart, incrementFromCart, decrementFromCart } from '../../../actions/products'
import { getColorState, getSizeState } from '../../../selectors/products'

function CartProduct({product}) {

  console.log(product)
  const [isMouseOver, setIsMouseOver] = useState(false)
 
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
              onClick={() => dispatch(removeFromCart(product.codigo))}
            />

            <Thumb
              src={product.imageThumbnail}
              alt={product.descricao}
            />

            <div className="shelf-item__details">
              <p className="title-cart">{product.descricao}</p>

              <div className="desc">
                <p> Tamanho: {product.size} </p>
                <p> Cor: {product.color} </p>
                <p> Quantidade: {product.quantity} </p>
              </div>
            </div>

            <div className="shelf-item__price">
              <p>{parseFloat(product.preco).toFixed(2).replace('.' , ',')}</p> 
                <div>
                  <button 
                    className="change-product-button" 
                    onClick={() => dispatch(decrementFromCart(product.codigo))} 
                    disabled={product.quantity === 1 ? true : false} >
                      -
                  </button>

                  <button 
                    className="change-product-button" 
                    onClick={() => dispatch(incrementFromCart(product.codigo))} >
                      +
                  </button>
                </div>
            </div>
          </div>
      </Fragment>
      
    )
  }

export default CartProduct

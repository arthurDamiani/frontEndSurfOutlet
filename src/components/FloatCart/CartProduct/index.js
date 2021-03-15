import React, { Fragment, useState } from 'react'

import { useDispatch } from 'react-redux'

import Thumb from './../../Thumb'

import { removeFromCart, incrementFromCart, decrementFromCart } from '../../../actions/products'

function CartProduct({products}) {

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
              onClick={() => dispatch(removeFromCart(products.codigo))}
            />

            <Thumb
              src={products.imageThumbnail}
              alt={products.descricao}
            />

            <div className="shelf-item__details">
              <p className="title-cart">{products.descricao}</p>

              <div className="desc">
                <p> Tamanho: {localStorage.getItem('@surfoutlet/size')} </p>
                <p> Cor: {localStorage.getItem('@surfoutlet/color')} </p>
                <p> Quantidade: {products.quantity} </p>
              </div>
            </div>

            <div className="shelf-item__price">
              <p>{parseFloat(products.preco)}</p> 
                <div>
                  <button 
                    className="change-product-button" 
                    onClick={() => dispatch(decrementFromCart(products.codigo))} 
                    disabled={products.quantity === 1 ? true : false} >
                      -
                  </button>

                  <button 
                    className="change-product-button" 
                    onClick={() => dispatch(incrementFromCart(products.codigo))} >
                      +
                  </button>
                </div>
            </div>
          </div>
      </Fragment>
      
    )
  }

export default CartProduct

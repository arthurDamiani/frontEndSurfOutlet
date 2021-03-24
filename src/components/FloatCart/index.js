import React, { useState, Fragment, useMemo } from 'react'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'
import { getCartTotal, getCartState } from '../../selectors/products'
import { ReactComponent as Cart } from '../../assets/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'

import './style.css'

function FloatCart() {

  const [isOpen, setIsOpen] = useState(false)

  const productsCart = useSelector(getCartState)

  const total = useSelector(getCartTotal)

  const authorized = sessionStorage.getItem('authorized')

  const itemQuantity = productsCart
    .map((item) => item.quantity)
    .reduce((item, total) => item + total, 0)

  const openFloatCart = () => setIsOpen(true)

  const closeFloatCart = () => setIsOpen(false)

  const noAuthorized = () => {
    closeFloatCart()
    alert('Faça login ou cadastre-se antes de finalizar no carrinho')
  }

  const cart = productsCart.map(p => <CartProduct product={p} key={p.id} /> )

  const classes = ['float-cart']

  if (!!isOpen) {
     classes.push('float-cart--open')
  }

  console.log(productsCart.map((item) => item))

    return (
      <Fragment>
          <div className={classes.join(' ')}>
            {/* If cart open, show close (x) button */}
            {isOpen && (
              <div
                onClick={() => closeFloatCart()}
                className="float-cart__close-btn"
              >
                X
              </div>
            )}

            {/* If cart is closed, show bag with quantity of product and open cart action */}
            {!isOpen && (
              <span
                onClick={() => openFloatCart()}
                className="bag bag--float-cart-closed"
              >
                <Cart height='40' width='40' color='#0080A8' />
                <span className="bag__quantity">{itemQuantity}</span>
              </span>
            )}

            <div className="float-cart__content">
              <div className="float-cart__header">
                <span className="bag">
                  <Cart height='40' width='40' color='#0080A8' />
                  <span className="bag__quantity">{itemQuantity}</span>
                </span>
                <span className="header-title">CARRINHO</span>
              </div>

              <div className="float-cart__shelf-container">
                {cart} 
                
                {productsCart.length === 0 && (
                  <p className="shelf-empty">
                    Adicione algum produto no carrinho
                  </p>
                )}
              </div>

              <div className="float-cart__footer">
                <div className="sub">TOTAL</div>
                <div className="sub-price">

                  <p className="sub-price__val">
                    {`R$ ${total.toFixed(2).replace('.' , ',')}`}
                  </p>

                  <small className="sub-price__installment">
                    {!productsCart.installments && (
                      <span>
                        {`OU EM 10 x R$ ${(total / 10).toFixed(2).replace('.' , ',')}`}
                      </span>
                    )}
                  </small>
                </div>
                  <div className="buy-btn" >
                      { 
                        authorized === 'true' ? 
                        <Link to='/payment' className='logado' onClick={closeFloatCart}>
                            FINALIZAR
                        </Link>
                        :
                        <Link to='/login' className='Nlogado' onClick={noAuthorized}>
                            FINALIZAR
                        </Link>
                      }
                    
                  </div>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }

export default FloatCart

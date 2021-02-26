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

  const itemQuantity = productsCart
    .map((item) => item.quantity)
    .reduce((item, total) => item + total, 0)

  const openFloatCart = () => setIsOpen(true)

  const closeFloatCart = () => setIsOpen(false)

    let cart = productsCart.map(p => <CartProduct products={p} key={p.id} /> )

    let classes = ['float-cart']

    if (!!isOpen) {
      classes.push('float-cart--open')
    }

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
              <span className="header-title">Carrinho</span>
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
                  {`R$ ${total}`}
                </p>

                <small className="sub-price__installment">
                  {!productsCart.installments && (
                    <span>
                      {`OU EM 10 x R$ ${(total / 10)}`}
                    </span>
                  )}
                </small>
              </div>
              <Link to='/payment'>
                <div className="buy-btn">
                  Finalizar
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

export default FloatCart

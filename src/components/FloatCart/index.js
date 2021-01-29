import React, { useState, Fragment } from 'react'
 
import { useSelector } from 'react-redux'

import CartProduct from './CartProduct'
import { formatPrice } from '../../services/util'

import { getCartTotal, getCartState } from '../../selectors/products'

import './style.css'

function FloatCart() {

  const [isOpen, setIsOpen] = useState(false)

  const products = useSelector(getCartState)

  const cartInfo = useSelector(getCartState)

  const total = useSelector(getCartTotal)

  const itemQuantity = cartInfo
    .map((item) => item.quantity)
    .reduce((item, total) => item + total, 0)


  const openFloatCart = () => setIsOpen(true)

  const closeFloatCart = () => setIsOpen(false)

    let cartProducts = products.map(p => {
        return (
          <CartProduct products={p} key={p.id} />
        )
    })

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
              <span className="bag__quantity">{itemQuantity}</span>
            </span>
          )}

          <div className="float-cart__content">
            <div className="float-cart__header">
              <span className="bag">
                <span className="bag__quantity">{itemQuantity}</span>
              </span>
              <span className="header-title">Carrinho</span>
            </div>

            <div className="float-cart__shelf-container">
              {cartProducts} 
              
              {products.length === 0 && (
                <p className="shelf-empty">
                  Adicione algum produto no carrinho
                </p>
              )}
            </div>

            <div className="float-cart__footer">
              <div className="sub">TOTAL</div>
              <div className="sub-price">

                <p className="sub-price__val">
                  {`R$ ${formatPrice(total, products.currencyId )}`}
                </p>

                <small className="sub-price__installment">
                  {!products.installments && (
                    <span>
                      {`OU EM 10 x R$ ${formatPrice(
                        total / 10,
                        products.currencyId
                      )}`}
                    </span>
                  )}
                </small>
              </div>
              <div className="buy-btn">
                Finalizar
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

export default FloatCart

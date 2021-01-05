import React from 'react'
import './cartSubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../contexts/StateProvider'
import { getCartTotal } from '../../contexts/reducer'

function CartSubTotal() {
    const [{ cart }, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            Subtotal ({cart.length} itens): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'R$'}
            />

            <button>Finalizar compra</button>
        </div>
    )

}

export default CartSubTotal
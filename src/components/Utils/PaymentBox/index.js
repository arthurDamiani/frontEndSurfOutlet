import React from 'react'
import {Button} from '@material-ui/core'

import './paymentBox.css'

function PaymentBox(props) {
    return (
        <div className={props.type === 1 ? 'payment-box-container' : 'payment-box-container space'}>
            {props.children}
            {props.type === 1 ?
            <div className='payment-box-button-container'>
                <Button color='primary'>Alterar Dados</Button>
            </div> : ''}
        </div>
    )
}

export default PaymentBox

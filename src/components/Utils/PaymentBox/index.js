import React from 'react'
import {Button} from '@material-ui/core'

import './paymentBox.css'

function PaymentBox(props) {
    return (
        <div className={props.type === 2 ? 'payment-box-container space' : 'payment-box-container'}>
            {props.children}
            {props.type === 1 ?
            <div className='payment-box-button-container'>
                <Button onClick={props.onClick} color='primary'>Alterar Dados</Button>
            </div> : ''}
        </div>
    )
}

export default PaymentBox

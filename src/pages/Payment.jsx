import React from 'react'
import NumeratedTitled from '../components/Utils/NumeratedTitle'
import PaymentBox from '../components/Utils/PaymentBox'

import '../styles/payment.css'

function Payment() {
    return (
        <div className='payment-container'>
            <div className='payment-top-container'>
                <div>
                    <NumeratedTitled number='1' title='Dados Pessoais' />
                    <PaymentBox type={1}>
                        <div className='payment-box-data'>
                            <p>Matheus B. Vieira</p>
                            <p>matheus.bvieira@gmail.com</p>
                            <p>(48)99629-4749</p>
                            <p>083.522.566-11</p>
                        </div>
                    </PaymentBox>
                </div>
                <div>
                    <NumeratedTitled number='2' title='Entrega' />
                    <PaymentBox type={1}>
                        <div className='payment-box-data'>
                            <p>Rodovia Jornalista Manoel de Menezes, 2051, 10</p>
                            <p>Barra da Lagoa - Florianópolis - SC</p>
                            <p>88061-700</p>
                            <p>Brasil</p>
                            <p>R$ 20,00</p>
                        </div>
                    </PaymentBox>
                </div>
            </div>
            <div>
                <NumeratedTitled number='3' title='Pagamento' />
            </div>
        </div>
    )
}

export default Payment

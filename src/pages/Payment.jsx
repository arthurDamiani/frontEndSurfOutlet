import React, {useState} from 'react'
import NumeratedTitled from '../components/Utils/NumeratedTitle'
import PaymentBox from '../components/Utils/PaymentBox'
import {Button, TextField, Select} from '@material-ui/core'
import AddressData from '../components/Form/AddressData'

import '../styles/payment.css'

function Payment() {
    const [address, setAddress] = useState('Rodovia Jornalista Manoel de Menezes')

    const [paymentType, setPaymentType] = useState(0)
    const [cardType, setCardType] = useState('')
    const [installments, setInstallments] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [valid, setValid] = useState('')
    const [cvv, setCvv] = useState('')

    return (
        <div className='payment-container'>
            <div className='payment-top-container'>
                <div>
                    <NumeratedTitled number='1' title='Dados Pessoais' />
                    <PaymentBox type={3}>
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
                        <form className='payment-box-data'>
                            <TextField 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                id='address'
                                label='Endereço'
                                variant='outlined'
                                margin='normal'
                                className='white-background'
                                size="small"
                                InputProps={{
                                    readOnly: true,
                                }}
                                fullWidth
                            />
                            <div className='line-input'>
                                <div className='first-line-input'>
                                    <TextField 
                                        defaultValue='2051'
                                        id='number'
                                        label='Número'
                                        variant='outlined'
                                        margin='normal'
                                        className='white-background'
                                        size="small"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                                <TextField 
                                    defaultValue="Casa 10"
                                    id='complement'
                                    label='Complemento'
                                    variant='outlined'
                                    margin='normal'
                                    className='white-background'
                                    size="small"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    fullWidth
                                />
                            </div>
                            <TextField 
                                defaultValue="88061-700"
                                id='cep'
                                label='CEP'
                                variant='outlined'
                                margin='normal'
                                className='white-background'
                                size="small"
                                InputProps={{
                                    readOnly: true,
                                }}
                                fullWidth
                            />
                            <div className='line-input'>
                                <div className='first-line-input'>
                                    <TextField 
                                        defaultValue='SC'
                                        id='state'
                                        label='Estado'
                                        variant='outlined'
                                        margin='normal'
                                        className='white-background'
                                        size="small"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                                <TextField 
                                    defaultValue="Florianópolis"
                                    id='city'
                                    label='Cidade'
                                    variant='outlined'
                                    margin='normal'
                                    className='white-background'
                                    size="small"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    fullWidth
                                />
                            </div>
                            <TextField 
                                defaultValue="Barra da Lagoa"
                                id='neighborhood'
                                label='Bairro'
                                variant='outlined'
                                margin='normal'
                                className='white-background'
                                size="small"
                                InputProps={{
                                    readOnly: true,
                                }}
                                fullWidth
                            />
                            <p>R$ 20,00</p>
                        </form>
                    </PaymentBox>
                </div>
            </div>
            <div className='payment-bottom-container'>
                <NumeratedTitled number='3' title='Pagamento' />
                <div className='payment-data'>
                    <Select
                        native
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                        onBlur={() => console.log(paymentType)}
                        variant='filled'
                    >
                        <option defaultChecked value={0}>Forma pagamento</option>
                        <option value={1}>Cartão</option>
                        <option value={2}>Boleto</option>
                    </Select>
                    {paymentType == 1 ?
                    <PaymentBox type={2}>
                        <Select
                            native
                            value={cardType}
                            onChange={(e) => setCardType(e.target.value)}
                            variant='outlined'
                            className='white-background'
                            fullWidth
                        >
                            <option defaultChecked value=''>Tipo Cartão</option>
                            <option value='credit'>Crédito</option>
                            <option value='debit'>Débito</option>
                        </Select>
                        <TextField 
                            value={installments}
                            onChange={(e) => setInstallments(e.target.value)}
                            id='installments'
                            label='parcelas'
                            variant='outlined'
                            margin='normal'
                            type='number'
                            className='white-background'
                            required
                            fullWidth
                        />
                        <TextField 
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            id='cardNumber'
                            label='Número do cartão'
                            variant='outlined'
                            margin='normal'
                            className='white-background'
                            required
                            fullWidth
                        />
                        <TextField 
                            value={valid}
                            onChange={(e) => setValid(e.target.value)}
                            id='valid'
                            label='Validade'
                            variant='outlined'
                            margin='normal'
                            className='white-background'
                            required
                        />
                        <div className='first-line-input'>
                            <TextField 
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                id='cvv'
                                label='CVV'
                                variant='outlined'
                                margin='normal'
                                type='number'
                                className='white-background'
                                required
                            />
                        </div>
                    </PaymentBox> : ''}
                </div>
            </div>
            <div className='payment-button-container'>
                <Button variant='contained' color='primary'>Finalizar compra</Button>
            </div>
        </div>
    )
}

export default Payment

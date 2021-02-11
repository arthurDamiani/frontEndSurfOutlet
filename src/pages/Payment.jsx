import React, {useState, useEffect} from 'react'
import NumeratedTitled from '../components/Utils/NumeratedTitle'
import PaymentBox from '../components/Utils/PaymentBox'
import {Button, TextField, Select} from '@material-ui/core'
import PaypalButton from '../components/PaypalButton'
import api from '../services/api'

import '../styles/payment.css'

function Payment() {
    const [personalData, setPersonalData] = useState([])

    const [edit, setEdit] = useState(false)
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [cep, setCep] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [neighborhood, setNeighborhood] = useState('')

    const token = sessionStorage.getItem('key')
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token

    useEffect(() => {
        getUserData()
        getAddressData()
    }, [edit])

    async function getUserData() {
        await api.get('/usuario')
        .then((res) => {
            setPersonalData(res.data)
        })
        .catch(() => alert('Não foi possível pegar os dados!'))
    }

    async function getAddressData() {
        api.get('/endereco')
        .then((res) => {
            setStreet(res.data.rua)
            setNumber(res.data.numero)
            setComplement(res.data.complemento)
            setCep(res.data.cep)
            setState(res.data.estado)
            setCity(res.data.cidade)
            setNeighborhood(res.data.bairro)
        })
        .catch(() => alert('Falha ao obter dados de endereço!'))
    }

    async function handleEditAddress() {
        if(edit) {
            await api.put('endereco', {
                bairro: neighborhood,
                cep: cep,
                cidade: city,
                complemento: complement,
                estado: state,
                numero: number,
                rua: street
            })
            .then(() => alert('Endereço editado com sucesso!'))
            .catch(() => alert('Falha ao editar endereço!'))
        } else {
            setEdit(true)
        }
    }

    return (
        <div className='payment-container'>
            <div className='payment-top-container'>
                <div>
                    <NumeratedTitled number='1' title='Dados Pessoais' />
                    <PaymentBox type={3}>
                        <div className='payment-box-data'>
                            <p>{personalData.nomeCompleto}</p>
                            <p>{personalData.email}</p>
                            <p>{personalData.telefone}</p>
                            <p>{personalData.cpf}</p>
                        </div>
                    </PaymentBox>
                </div>
                <div>
                    <NumeratedTitled number='2' title='Entrega' />
                    <PaymentBox type={1} onClick={handleEditAddress}>
                        <form className='payment-box-data'>
                            <TextField 
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                id='street'
                                label='Rua'
                                variant='outlined'
                                margin='normal'
                                className='white-background'
                                size="small"
                                InputProps={{
                                    readOnly: !edit,
                                }}
                                fullWidth
                            />
                            <div className='line-input'>
                                <div className='first-line-input'>
                                    <TextField 
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                        id='number'
                                        label='Número'
                                        variant='outlined'
                                        margin='normal'
                                        className='white-background'
                                        size="small"
                                        InputProps={{
                                            readOnly: !edit,
                                        }}
                                    />
                                </div>
                                <TextField 
                                    value={complement}
                                    onChange={(e) => setComplement(e.target.value)}
                                    id='complement'
                                    label='Complemento'
                                    variant='outlined'
                                    margin='normal'
                                    className='white-background'
                                    size="small"
                                    InputProps={{
                                        readOnly: !edit,
                                    }}
                                    fullWidth
                                />
                            </div>
                            <TextField 
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                id='cep'
                                label='CEP'
                                variant='outlined'
                                margin='normal'
                                className='white-background'
                                size="small"
                                InputProps={{
                                    readOnly: !edit,
                                }}
                                fullWidth
                            />
                            <div className='line-input'>
                                <div className='first-line-input'>
                                    <TextField 
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        id='state'
                                        label='Estado'
                                        variant='outlined'
                                        margin='normal'
                                        className='white-background'
                                        size="small"
                                        InputProps={{
                                            readOnly: !edit,
                                        }}
                                    />
                                </div>
                                <TextField 
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    id='city'
                                    label='Cidade'
                                    variant='outlined'
                                    margin='normal'
                                    className='white-background'
                                    size="small"
                                    InputProps={{
                                        readOnly: !edit,
                                    }}
                                    fullWidth
                                />
                            </div>
                            <TextField 
                                value={neighborhood}
                                onChange={(e) => setNeighborhood(e.target.value)}
                                id='neighborhood'
                                label='Bairro'
                                variant='outlined'
                                margin='normal'
                                className='white-background'
                                size="small"
                                InputProps={{
                                    readOnly: !edit,
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
                    <PaypalButton />        
                </div>
            </div>
        </div>
    )
}

export default Payment

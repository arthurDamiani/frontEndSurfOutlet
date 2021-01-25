import React, {useState, useContext} from 'react'
import { Button, TextField } from '@material-ui/core'
import FormValidations from '../../contexts/FormValidations'
import useError from '../../hooks/useError'

import './form.css'

function AddressData({onSubmit, goBack}) {
    const [cep, setCep] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [neighborhood, setNeighborhood] = useState('') 
    const [city, setCity] = useState('')
    const [state, setState] = useState('')


    return (
        <>
            <h2 className='form-title'>Endereço</h2>
            <form className='form' onSubmit={(e) => {
                e.preventDefault()
                onSubmit({cep, address, number, complement, neighborhood, city, state})
            }}>
                <TextField
                    value={cep}
                    onChange={(e) => {setCep(e.target.value)}}
                    id='cep' 
                    label='CEP' 
                    type='number' 
                    variant='filled'
                    margin='normal'
                    required 
                    fullWidth
                />
                <TextField
                    value={address}
                    onChange={(e) => {setAddress(e.target.value)}}
                    id='address' 
                    label='Endereço' 
                    type='text' 
                    variant='filled'
                    margin='normal'
                    required 
                    fullWidth
                />
                <div className='input-container-form'>
                    <div className="margin-form">
                        <TextField
                            value={number}
                            onChange={(e) => {setNumber(e.target.value)}}
                            id='number' 
                            label='Numero' 
                            type='number' 
                            variant='filled'
                            margin='normal'
                            required 
                            className='inline-input'
                        />
                    </div>
                    <TextField
                        value={complement}
                        onChange={(e) => {setComplement(e.target.value)}}
                        id='complement' 
                        label='Complemento' 
                        type='text' 
                        variant='filled'
                        margin='normal'
                        required 
                        className='inline-input'
                    />
                </div>
                <TextField
                    value={neighborhood}
                    onChange={(e) => {setNeighborhood(e.target.value)}}
                    id='neighborhood' 
                    label='Bairro' 
                    type='text' 
                    variant='filled'
                    margin='normal'
                    fullWidth
                    required 
                />
                <div className="input-container-form">
                    <div className="margin-form">
                        <TextField
                            value={city}
                            onChange={(e) => {setCity(e.target.value)}}
                            id='city' 
                            label='Cidade' 
                            type='text' 
                            variant='filled'
                            margin='normal'
                            required 
                            className='inline-input'
                        />
                    </div>
                    <TextField
                        value={state}
                        onChange={(e) => {setState(e.target.value)}}
                        id='state' 
                        label='Estado' 
                        type='text' 
                        variant='filled'
                        margin='normal'
                        required 
                        className='inline-input'
                    />
                </div>
                <div className="navigation-container">
                    <Button onClick={goBack} color='primary'>Voltar</Button>
                    <Button variant='contained' type='submit' color='primary'>Cadastrar</Button>
                </div>
            </form>
        </>
    )
}

export default AddressData

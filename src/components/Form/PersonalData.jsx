import React, {useState, useContext} from 'react'
import { TextField, Button } from '@material-ui/core'
import FormValidations from '../../contexts/FormValidations'
import useError from '../../hooks/useError'

import './form.css'

function PersonalData({onSubmit, goBack, data}) {
    const [name, setName] = useState(data.name)
    const [cpf, setCpf] = useState(data.cpf)
    const [phone, setPhone] = useState(data.phone)
    const validations = useContext(FormValidations)
    const [error, fieldValidator, canSend] = useError(validations)

    return (
        <>
            <h2 className='form-title'>Informações pessoais</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(canSend()) {
                    onSubmit({name, cpf, phone})
                }
            }}>
                <TextField
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    id='name' 
                    label='Nome' 
                    type='text' 
                    variant='filled'
                    margin='normal'
                    fullWidth
                    required 
                />
                <div className='input-container'>
                    <div className='margin'>
                        <TextField
                            value={cpf}
                            onChange={(e) => {setCpf(e.target.value)}}
                            onBlur={fieldValidator}
                            error={!error.cpf.valid}
                            helperText={error.cpf.text}
                            id='cpf' 
                            name='cpf'
                            label='CPF' 
                            type='number' 
                            variant='filled'
                            margin='normal'
                            required 
                            className='inline-input'
                        />
                    </div>
                    <TextField
                        value={phone}
                        onChange={(e) => {setPhone(e.target.value)}}
                        id='phone' 
                        label='Telefone' 
                        type='tel' 
                        variant='filled'
                        margin='normal'
                        required 
                        className='inline-input'
                    />
                </div>
                <div className="navigation-container">
                    <Button onClick={goBack} color='primary'>Voltar</Button>
                    <Button type='submit' color='primary'>Próximo</Button>
                </div>
            </form>
        </>
    )
}

export default PersonalData

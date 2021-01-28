import React, {useState, useContext} from 'react'
import { TextField, Button } from '@material-ui/core'
import FormValidations from '../../contexts/FormValidations'
import useError from '../../hooks/useError'

import './form.css'

function UserData({onSubmit, data, signup}) {
    const [name, setName] = useState(data.nomeCompleto)
    const [email, setEmail] = useState(data.email)
    const [password, setPassword] = useState(data.senha)
    const [confirmPassword, setConfirmPassword] = useState(data.senha)
    const [confirmPasswordError, setConfirmPasswordError] = useState({valid:true, text:''})
    const [cpf, setCpf] = useState(data.cpf)
    const [phone, setPhone] = useState(data.telefone)
    const validations = useContext(FormValidations)
    const [error, fieldValidator, canSend] = useError(validations)

    function confirmPasswordValidator() {
        if(password !== confirmPassword) {
            setConfirmPasswordError({valid:false, text:'Senhas incompativeis'})
        } else {
            setConfirmPasswordError({valid:true, text:''})
        }
    }

    return (
        <>
            {signup ?
            <h2 className='form-title'>Crie sua conta</h2>
            : ''}
            <form onSubmit={(e) => {
                e.preventDefault()
                if(canSend() && confirmPasswordError.valid) {
                    onSubmit({name, email, password, cpf, phone})
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
                <TextField
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    id='email' 
                    label='Email' 
                    type='email' 
                    variant='filled'
                    margin='normal'
                    fullWidth
                    required 
                />
                <div className='input-container-form'>
                    <div className='margin-form'>
                        <TextField
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            onBlur={fieldValidator}
                            error={!error.password.valid}
                            helperText={error.password.text}
                            id='password'
                            name='password'
                            label='Senha'
                            type='password'
                            variant='filled'
                            margin='normal'
                            required={signup}
                            className='inline-input'
                        />
                    </div>
                    <TextField
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value)}}
                        onBlur={confirmPasswordValidator}
                        error={!confirmPasswordError.valid}
                        helperText={confirmPasswordError.text}
                        id='confirmPassword'
                        name='confirmPassword'
                        label='Confirma Senha'
                        type='password'
                        variant='filled'
                        margin='normal'
                        required={signup}
                        className='inline-input'
                    />
                </div>
                <div className='input-container-form'>
                    <div className='margin-form'>
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
                <div className={signup ? 'navigation-container' : 'navigation-container edit-button'}>
                    {signup ?
                    <>
                        <Button disabled>Voltar</Button>
                        <Button type='submit' color='primary'>Próximo</Button>
                    </>
                    : <Button type='submit' color='primary'>Salvar alterações</Button>}
                </div>
            </form>
        </>
    )
}

export default UserData

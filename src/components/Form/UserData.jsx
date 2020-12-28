import React, {useState, useContext} from 'react'
import { TextField, Button } from '@material-ui/core'
import FormValidations from '../../contexts/FormValidations'
import useError from '../../hooks/useError'

import './form.css'

function UserData({onSubmit, data}) {
    const [email, setEmail] = useState(data.email)
    const [password, setPassword] = useState(data.password)
    const [confirmPassword, setConfirmPassword] = useState(data.password)
    const validations = useContext(FormValidations)
    const [error, fieldValidator, canSend] = useError(validations)


    return (
        <>
            <h2 className='form-title'>Crie sua conta</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(canSend()) {
                    onSubmit({email, password})
                }
            }}>
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
                    fullWidth
                    required
                />
                <TextField
                    value={confirmPassword}
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                    onBlur={fieldValidator}
                    error={!error.confirmPassword.valid}
                    helperText={error.confirmPassword.text}
                    id='confirmPassword'
                    name='confirmPassword'
                    label='Confirma Senha'
                    type='password'
                    variant='filled'
                    margin='normal'
                    fullWidth
                    required
                />
                <div className="navigation-container">
                    <Button disabled>Voltar</Button>
                    <Button type='submit' color='primary'>Próximo</Button>
                </div>
            </form>
        </>
    )
}

export default UserData

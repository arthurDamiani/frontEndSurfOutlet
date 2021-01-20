import React, {useState} from 'react'
import {TextField, InputAdornment, Button } from '@material-ui/core'
import {Person, LockOpen, GroupAdd} from '@material-ui/icons'
import api from '../../services/api'

import './login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        await api.post('/auth', {
            email: email,
            senha: password
        })
        .then((res) => {
            sessionStorage.setItem('key', res.data.token)
            alert(`login efetuado com sucesso`)
        })
        .catch(() => alert('Usuário ou senha incorretos!'))
    }

    return (
        <div className='login-container'>
            <h2 className="login-title">Acesse sua conta</h2>
            <div className='login-box'>
                <form onSubmit={handleSubmit}>
                    <div className='login'>
                        <TextField 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{endAdornment: (<InputAdornment><Person /></InputAdornment>)}}
                            id='email'
                            label='Email'
                            variant='filled'
                            size='small'
                            type='text'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{endAdornment: (<InputAdornment><LockOpen /></InputAdornment>)}}
                            id='password'
                            label='Senha'
                            variant='filled'
                            size='small'
                            type='password'
                            margin='normal'
                            fullWidth
                        />
                        <div className="button-login">
                            <Button type='submit' className='login-button' variant='contained' color='primary' fullWidth >Entrar</Button>
                        </div>
                        <div className="forget-password">
                            <p>Esqueceu sua senha?<a>Clique aqui</a></p>
                        </div>
                    </div>
                </form>
                <div className="separation">
                    <div className='line'></div>
                    <p>ou</p>
                    <div className='line'></div>
                </div>
                <div className='sign-up'>
                    <Button href='#' variant='contained' color='primary' ><GroupAdd />Cadastre-se</Button>
                </div>
            </div>
        </div>
    )
}

export default Login

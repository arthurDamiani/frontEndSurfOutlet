import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {TextField, InputAdornment, Button } from '@material-ui/core'
import {Person, LockOpen, GroupAdd} from '@material-ui/icons'
import Separation from '../Utils/Separation'
import Box from '../Utils/Box'
import Title from '../Utils/Title'
import Container from '../Utils/Container'
import InputContainer from '../Utils/InputContainer'
import ButtonsContainer from '../Utils/ButtonsContainer'
import api from '../../services/api'

import './login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        await api.post('/auth', {
            email: email,
            senha: password
        })
        .then((res) => {
            sessionStorage.setItem('key', res.data.token)
            history.push('/edit')
        })
        .catch(() => alert('Usuário ou senha incorretos!'))
    }

    return (
        <Container>
            <Title title='Acesse sua conta' />
            <Box>
                <InputContainer onSubmit={handleSubmit}>
                    <TextField 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{endAdornment: (<InputAdornment><Person /></InputAdornment>)}}
                        id='email'
                        label='E-mail'
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
                    <ButtonsContainer>
                        <Button type='submit' className='login-button' variant='contained' color='primary' fullWidth >Entrar</Button>
                    </ButtonsContainer>
                    <div className="forget-password">
                        <p>Esqueceu sua senha?<a>Clique aqui</a></p>
                    </div>
                </InputContainer>
                <Separation />
                <div className='sign-up'>
                    <Button href='#' variant='contained' color='primary' ><GroupAdd />Cadastre-se</Button>
                </div>
            </Box>
        </Container>
    )
}

export default Login

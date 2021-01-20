import React, {useState} from 'react'
import {TextField, InputAdornment, Button } from '@material-ui/core'
import {Person, LockOpen, GroupAdd} from '@material-ui/icons'
import Separation from '../utils/Separation'
import Box from '../utils/Box'
import Title from '../utils/Title'
import Container from '../utils/Container'
import InputContainer from '../utils/InputContainer'
import ButtonsContainer from '../utils/ButtonsContainer'

import './login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(`email: ${email} senha: ${password}`)
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

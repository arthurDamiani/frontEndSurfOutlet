import React, {useState} from 'react'
import {TextField, InputAdornment, Button } from '@material-ui/core'
import {Person, LockOpen, Description} from '@material-ui/icons'
import Container from '../utils/Container'
import Title from '../utils/Title'
import Box from '../utils/Box'
import Separation from '../utils/Separation'
import InputContainer from '../utils/InputContainer'
import ButtonsContainer from '../utils/ButtonsContainer'


function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <Title title='Recuperar senha ou email' />
            <Box>
                <InputContainer>
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
                    <ButtonsContainer>
                        <Button type='submit' href='#' variant='contained' color='primary' fullWidth >Recuperar senha</Button>
                    </ButtonsContainer>
                </InputContainer>
                <Separation />
                <InputContainer>
                    <TextField
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        InputProps={{endAdornment: (<InputAdornment><Description /></InputAdornment>)}}
                        id='password'
                        label='CPF'
                        variant='filled'
                        size='small'
                        type='password'
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
                        <Button type='submit' href='#' variant='contained' color='primary' fullWidth >Recuperar e-mail</Button>
                    </ButtonsContainer>
                </InputContainer>
            </Box>
        </Container>
    )
}

export default ForgotPassword

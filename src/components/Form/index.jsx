import React, {useState} from 'react'
import {Stepper, Step, StepLabel, Container} from '@material-ui/core'
import UserData from './UserData'
import AddressData from './AddressData'
import {passwordValidator, cpfValidator, phoneValidator} from '../../models/Form'
import FormValidations from '../../contexts/FormValidations'
import api from '../../services/api'

import './form.css'

function Form() {
    const [currentStep, setCurrentStep] = useState(0)
    const [collectedData, setcollectedData] = useState({email: '',password: '', name: '', cpf: '', phone: ''})

    async function handleLogin(email, password) {
        await api.post('/auth', {
            email: email,
            senha: password
        })
        .then((res) => {
            sessionStorage.setItem('key', res.data.token)
            api.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token
        })
        .catch(() => alert('Usuário ou senha incorretos!'))
    }

    async function signUpUser({name, password, email, cpf, phone}) {
        setcollectedData({email: email,password: password, name: name, cpf: cpf, phone: phone})
        await api.post('/usuario', {
            cpf: cpf,
            email: email,
            nomeCompleto: name,
            senha: password,
            telefone: phone
        })
        .then(() => {
            handleLogin(email, password)
            next()
        })
        .catch(() => alert('Falha ao cadastrar usuário'))
    }

    async function signUpAddress({cep, street, number, complement, neighborhood, city, state}) {
        await api.post('/endereco', {
            bairro: neighborhood,
            cep: cep,
            cidade: city,
            complemento: complement,
            estado: state,
            numero: number,
            rua: street
        })
        .then(() => next())
        .catch(() => alert('Falha ao cadastrar endereço!'))
    }

    const forms = [
        <UserData data={collectedData} onSubmit={signUpUser} signup={true} />,
        <AddressData onSubmit={signUpAddress} goBack={goBack} signup={true} />,
        <h5>Obrigado pelo cadastro!</h5>
    ]

    function next() {
        setCurrentStep(currentStep+1)
    }

    function goBack() {
        setCurrentStep(currentStep-1)
    }

    return (
        <Container component='article' maxWidth='sm'>
            <Stepper activeStep={currentStep}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Endereço</StepLabel></Step>
                <Step><StepLabel>Finalizado</StepLabel></Step>
            </Stepper>
            <FormValidations.Provider value={{password:passwordValidator, cpf:cpfValidator, phone:phoneValidator}}>
                {forms[currentStep]}
            </FormValidations.Provider>
        </Container>
    )
}

export default Form

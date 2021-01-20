import React, {useEffect, useState} from 'react'
import {Stepper, Step, StepLabel, Container} from '@material-ui/core'
import UserData from './UserData'
import PersonalData from './PersonalData'
import AddressData from './AddressData'
import {passwordValidator, cpfValidator} from '../../models/Form'
import FormValidations from '../../contexts/FormValidations'

import './form.css'

function Form() {
    const [currentStep, setCurrentStep] = useState(0)
    const [collectedData, setcollectedData] = useState({email: '',password: '', name: '', cpf: '', rg: '', birthDate: '', phone: ''})

    useEffect(() => {
        if(currentStep === forms.length-1) {
            console.log(collectedData)
        }
    })

    function collectData(dados) {
        setcollectedData({...collectedData, ...dados})
        next()
    }

    const forms = [
        <UserData data={collectedData} onSubmit={collectData} />,
        <PersonalData data={collectedData} onSubmit={collectData} goBack={goBack} />,
        <AddressData onSubmit={collectData} goBack={goBack} />,
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
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Endereço</StepLabel></Step>
                <Step><StepLabel>Finalizado</StepLabel></Step>
            </Stepper>
            <FormValidations.Provider value={{password:passwordValidator, cpf:cpfValidator}}>
                {forms[currentStep]}
            </FormValidations.Provider>
        </Container>
    )
}

export default Form

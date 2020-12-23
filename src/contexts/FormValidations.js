import React from 'react'

const FormValidations = React.createContext(
    {password:noValidation, confirmPassword:noValidation, cpf:noValidation, rg:noValidation, cep:noValidation}
)

function noValidation(data) {
    return {valid:true, text:''}
}

export default FormValidations
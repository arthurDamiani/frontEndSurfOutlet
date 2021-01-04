function passwordValidator(password) {
    if(password.length < 8) {
        return {valid:false, text:'Senha deve conter no mínimo 8 caracteres'}
    } else {
        return {valid:true, text:''}
    }
}

function cpfValidator(cpf) {
    if(cpf.length !== 11) {
        return {valid:false, text:'CPF inválido!'}
    } else {
        return {valid:true, text:''}
    }
}

export {passwordValidator, cpfValidator}
import React, {useState, useEffect} from 'react'
import Title from '../components/Utils/Title'
import UserData from '../components/Form/UserData'
import AddressData from '../components/Form/AddressData'
import {Button} from '@material-ui/core'
import api from '../services/api'

import '../styles/editAccount.css'

function EditAccount() {
    const [formOption, setFormOption] = useState(1)

    const [personalData, setPersonalData] = useState([])
    const token = sessionStorage.getItem('key')

    useEffect(() => getData(), [formOption])

    async function getData() {
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
        await api.get('/usuario')
        .then((res) => {
            setPersonalData(res.data)
        })
        .catch(() => alert('Não foi possível pegar os dados!'))
    }

    function pageTitle() {
        switch(formOption) {
            case 1:
                return 'Editar Dados de Usuário'
            case 2:
                return 'Editar Endereço'
            default:
                return 'Editar Dados de Usuário'
        }
    }

    function switchFormOption() {
        switch(formOption) {
            case 1:
                return <UserData onSubmit={console.log('yei')} data={personalData} page={2} />
            case 2:
                return <AddressData onSubmit={console.log('yei')} page={2} />
            default:
                return <UserData onSubmit={console.log('yei')} data={personalData} page={2} />
        }
    }

    return (
        <div id='edit-account'>
            <Title title={pageTitle()} />
            <div className='edit-account-container'>
                <ul className='edit-account-list'>
                    <li className={formOption === 1 ? 'edit-bordered' : ''}>
                        <Button onClick={() => setFormOption(1)} color='primary' >Dados de usuário</Button>
                    </li>
                    <li className={formOption === 2 ? 'edit-bordered' : ''}>
                        <Button onClick={() => setFormOption(2)} color='primary' >Endereço</Button>
                    </li>
                    <li><Button color='primary'>Voltar</Button></li>
                </ul>
                <div className='form-container'>
                    {personalData.length !== 0 ? switchFormOption() : ''}
                </div>
            </div>
        </div>
    )
}

export default EditAccount

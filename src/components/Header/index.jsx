import React from 'react'
import {TextField, InputAdornment, Box} from '@material-ui/core'
import {Search, AccountCircle, PermPhoneMsg, AddShoppingCart} from '@material-ui/icons'
import './header.css'

const theme = {
    background: '#fff',
}

function Header() {
    return (
        <header id='header'>
            <nav className='header-top'>
                <a>Molokai</a>
                <form>
                    <TextField 
                        InputProps={{endAdornment: (<InputAdornment position='end'><Search color='primary' className='logo-input' /></InputAdornment>)}}
                        placeholder='Digite o que você procura' 
                        variant='outlined'
                        size='small'
                        className='header-input'
                        type='text'
                    />
                </form>
                <nav className='nav-container'>
                    <a className='nav-item'>
                        <AccountCircle fontSize="large" />
                        <p className='nav-item-legenda'>Entre ou cadastre-se</p>
                    </a>
                    <a className='nav-item'>
                        <PermPhoneMsg fontSize="large" />
                        <p className='nav-item-legenda'>Central de ajuda</p>
                    </a>
                    <a className='nav-item'>
                        <AddShoppingCart fontSize="large" />
                        <p className='nav-item-legenda'>Carrinho de compras</p>
                    </a>
                </nav>
            </nav>
            <nav className='menu-container'>
                <a className='menu-item'>Surf</a>
                <a className='menu-item'>Masculino</a>
                <a className='menu-item'>Feminno</a>
                <a className='menu-item'>Calçados</a>
                <a className='menu-item'>Juvenil</a>
                <a className='menu-item'>Óculos</a>
                <a className='menu-item'>Relógios</a>
                <a className='menu-item'>Acessórios</a>
                <a className='menu-item'>Marcas</a>
            </nav>
        </header>
    )
}

export default Header;
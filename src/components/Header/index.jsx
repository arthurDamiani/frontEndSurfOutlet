import React, {useState} from 'react'
import {TextField, InputAdornment} from '@material-ui/core'
import {Search, AccountCircle, AddShoppingCart} from '@material-ui/icons'
import {FaBars} from 'react-icons/fa'
import './header.css'

function Header() {
    const [search, setSearch] = useState('')
    const [sidebar, setSidebar] = useState(false)

    function showSideBar() {
        setSidebar(!sidebar)
    }
    return (
        <header id='header'>
            <nav className='header-top'>
                <div className="navbar">
                    <a onClick={showSideBar} href='#' className='menu-bars'>
                        <FaBars />
                    </a>
                </div>
                <a href='#' className='header-logo'>Molokai</a>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    console.log(search)
                }}>
                    <TextField
                        value={search}
                        onChange={(e) => {setSearch(e.target.value)}}
                        InputProps={{endAdornment: (<InputAdornment position='end'><Search color='primary' className='logo-input' /></InputAdornment>)}}
                        placeholder='Digite o que você procura' 
                        variant='outlined'
                        size='small'
                        className='header-input'
                        type='text'
                    />
                </form>
                <nav className='nav-container'>
                    <a href='#' className='nav-item'>
                        <AccountCircle fontSize="large" />
                        <p className='nav-item-legenda'>Entre ou cadastre-se</p>
                    </a>
                    <a href='#' className='nav-item'>
                        <AddShoppingCart fontSize="large" />
                        <p className='nav-item-legenda carrinho-legenda'>Carrinho de compras</p>
                    </a>
                </nav>
            </nav>
            <nav onClick={showSideBar} className={sidebar ? 'menu-container active' : 'menu-container'}>
                <div className='sidebar-top'>
                    <a href='#' className='sidebar-item'>
                        <AccountCircle fontSize="large" />
                        <p className='nav-item-legenda'>Entre ou cadastre-se</p>
                    </a>
                    <a href='#' className='sidebar-item'>
                        <AddShoppingCart fontSize="large" />
                        <p className='nav-item-legenda'>Carrinho de compras</p>
                    </a>
                </div>
                <a href='#' className='menu-item'>Surf</a>
                <a href='#' className='menu-item'>Masculino</a>
                <a href='#' className='menu-item'>Feminno</a>
                <a href='#' className='menu-item'>Calçados</a>
                <a href='#' className='menu-item'>Juvenil</a>
                <a href='#' className='menu-item'>Óculos</a>
                <a href='#' className='menu-item'>Relógios</a>
                <a href='#' className='menu-item'>Acessórios</a>
                <a href='#' className='menu-item'>Marcas</a>
            </nav>
        </header>
    )
}

export default Header;
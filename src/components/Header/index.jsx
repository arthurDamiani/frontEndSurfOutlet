import React, {useState} from 'react'
import {TextField, InputAdornment} from '@material-ui/core'
import {Search, AccountCircle, AddShoppingCart} from '@material-ui/icons'
import {FaBars} from 'react-icons/fa'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    const [search, setSearch] = useState('')
    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)

    return (
        <header id='header'>
            <nav className='header-top'>
                <div className="navbar">
                    <a onClick={showSideBar} href='#' className='menu-bars'>
                        <FaBars />
                    </a>
                </div>
                <a href='/' className='header-logo'>Molokai</a>
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
                    <Link to='#' className='nav-item'>
                        <AccountCircle fontSize="large" />
                        <p className='nav-item-legenda'>Entre ou cadastre-se</p>
                    </Link>
                    <Link to='/checkout' className='nav-item'>
                        <AddShoppingCart fontSize="large" />
                        <p className='nav-item-legenda carrinho-legenda'>{}</p>
                    </Link>
                </nav>
            </nav>
            <nav onClick={showSideBar} className={sidebar ? 'menu-container active' : 'menu-container'}>
                <div className='sidebar-top'>
                    <Link to='#' className='sidebar-item'>
                        <AccountCircle fontSize="large" />
                        <p className='nav-item-legenda'>Entre ou cadastre-se</p>
                    </Link>
                    <Link to='/checkout' className='sidebar-item'>
                        <AddShoppingCart fontSize="large" />
                        <p className='nav-item-legenda'>{}</p>
                    </Link>
                </div>
                <a href='/products' className='menu-item'>Surf</a>
                <a href='/products' className='menu-item'>Masculino</a>
                <a href='/products' className='menu-item'>Feminino</a>
                <a href='/products' className='menu-item'>Calçados</a>
                <a href='/products' className='menu-item'>Juvenil</a>
                <a href='/products' className='menu-item'>Óculos</a>
                <a href='/products' className='menu-item'>Relógios</a>
                <a href='/products' className='menu-item'>Acessórios</a>
                <a href='/products' className='menu-item'>Marcas</a>
            </nav>
        </header>
    )
}

export default Header;
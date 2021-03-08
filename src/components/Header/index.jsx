import React, {useState, useEffect, Fragment} from 'react'
import {TextField, InputAdornment} from '@material-ui/core'
import {Search, AccountCircle} from '@material-ui/icons'
import {FaBars} from 'react-icons/fa'
import './header.css'

import FloatCart from '../FloatCart'
import HeaderContent from '../HeaderContent'
import api from '../../services/api'
import masc from '../../assets/headerMasc.jpg'
import fem from '../../assets/headerFem.jpg'
import kid from '../../assets/headerKidd.jpg'

function Header() {
    const [search, setSearch] = useState('')
    const [sidebar, setSidebar] = useState(false)
    const [showFilter, setShowFilter] = useState(0)
    const [userName, setUserName] = useState('')

    const showSideBar = () => setSidebar(!sidebar)

    const token = sessionStorage.getItem('key')
    const authorized = sessionStorage.getItem('authorized')

    api.defaults.headers.common['Authorization'] = 'Bearer ' + token

    useEffect(() => getUserData(), [authorized])

    async function getUserData() {
        await api.get('/usuario')
        .then((res) => setUserName(res.data.nomeCompleto))
    }

    function switchFilter() {
        switch (showFilter) {
            case 1:
                return (
                    <Fragment>
                        <div className='header-subtitle'>
                            <a href='/products'>PRANCHAS</a>
                            <a href='/products'>WETSUITS</a>
                            <a href='/products'>LEASH</a>
                            <a href='/products'>RACKS</a>
                            <a href='/products'>QUILHAS</a>
                            <a href='/products'>STAND UP</a>
                        </div>
                        <img 
                            className='header-image'
                            src="https://images.tcdn.com.br/img/img_prod/812998/1612288585_wetsuits-01-min.jpg" 
                            alt='header-img'
                            href='/products'
                        />
                    </Fragment>
                )
            case 2:
                return <HeaderContent masc={masc} />
            case 3:
                return <HeaderContent masc={fem} />
            case 4:
                return <HeaderContent masc={kid} />
            case 5:
                return <a>Calça</a>
            case 6:
                return <a>Oakley</a>
            case 7:
                return <a>Invicta</a>
            case 8:
                return <a>Pulseira</a>
            case 9: 
                return <a>Billabong</a>
            default:
                break
        }
    }

    return (
        <header id='header'>
            <nav className='header-top'>
                <div onClick={showSideBar} className="navbar">
                    <FaBars />
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
                    <a href={authorized ? '/edit' : '/login'} className='nav-item'>
                        <AccountCircle fontSize="large" />
                        <p className='nav-item-legenda'>{authorized ? userName : 'Entre ou cadastre-se'}</p>
                    </a>
                    <div className="nav-item">
                        <FloatCart />
                    </div>
                </nav>
            </nav>
            <div onMouseLeave={() => setShowFilter(0)}>
                <nav onClick={showSideBar} className={sidebar ? 'menu-container active' : 'menu-container'}>
                    <div className='sidebar-top'>
                        <a href={authorized ? '/edit' : '/login'} className='sidebar-item'>
                            <AccountCircle fontSize="large" />
                            <p className='nav-item-legenda'>{authorized ? userName : 'Entre ou cadastre-se'}</p>
                        </a>
                    </div>
                    <a 
                        href='/products' 
                        className={showFilter === 1 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(1)} 
                    >Surf</a>
                    <a
                        href='/products' 
                        className={showFilter === 2 ? 'menu-item menu-item-active' : 'menu-item'}  
                        onMouseEnter={() => setShowFilter(2)} 
                    >Masculino</a>
                    <a 
                        href='/products' 
                        className={showFilter === 3 ? 'menu-item menu-item-active' : 'menu-item'}  
                        onMouseEnter={() => setShowFilter(3)} 
                    >Feminino</a>
                    <a 
                        href='/products' 
                        className={showFilter === 4 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(4)} 
                    >Juvenil</a>
                    <a 
                        href='/products' 
                        className={showFilter === 5 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                    >Acessórios</a>
                    <a 
                        href='/products' 
                        className={showFilter === 6 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                    >Calçados</a>
                    <a 
                        href='/products' 
                        className={showFilter === 7 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                    >Óculos</a>
                    <a 
                        href='/products' 
                        className={showFilter === 8 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                    >Relógio</a>
                    <a 
                        href='/products' 
                        className={showFilter === 9 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                    >Outlet</a>
                </nav>
                <div className={showFilter === 0 ? 'menu-filter-container filter-hide' : 'menu-filter-container'}>
                    {switchFilter()}
                </div>
            </div>
        </header>
    )
}

export default Header;
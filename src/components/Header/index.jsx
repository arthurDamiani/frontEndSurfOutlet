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
import { Link } from 'react-router-dom'

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
                            <Link to='/products'>PRANCHAS</Link>
                            <Link to='/products'>WETSUITS</Link>
                            <Link to='/products'>LEASH</Link>
                            <Link to='/products'>RACKS</Link>
                            <Link to='/products'>QUILHAS</Link>
                            <Link to='/products'>STAND UP</Link>
                        </div>
                        <img 
                            className='header-image'
                            src="https://images.tcdn.com.br/img/img_prod/812998/1612288585_wetsuits-01-min.jpg" 
                            alt='header-img'
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
                return (
                    <div className='wrapper-header-image-calcado'>
                        <div className='header-image-calcado'>
                            <img 
                                src="https://images.tcdn.com.br/img/img_prod/812998/1612288585_wetsuits-01-min.jpg" 
                                alt='header-img'
                            />
                            <Link to='/products' className='masc-calc'>MASCULINO</Link>
                        </div>
                        
                        <div className='header-image-calcado-2'>
                            <img 
                                src="https://images.tcdn.com.br/img/img_prod/812998/1612288585_wetsuits-01-min.jpg" 
                                alt='header-img'
                            />
                            <Link to='/products' className='fem-calc'>FEMININO</Link>
                        </div>
                    </div>
                )
            case 6:
            case 7:
            case 8:
            case 9: 
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
                <Link to='/' className='header-logo'>Molokai</Link>
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
                        <Link to={authorized ? '/edit' : '/login'} className='sidebar-item'>
                            <AccountCircle fontSize="large" />
                            <p className='nav-item-legenda'>{authorized ? userName : 'Entre ou cadastre-se'}</p>
                        </Link>
                    </div>
                    <Link 
                        to='/products' 
                        className={showFilter === 1 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(1)} 
                    >Surf</Link>
                    <Link
                        to='/products' 
                        className={showFilter === 2 ? 'menu-item menu-item-active' : 'menu-item'}  
                        onMouseEnter={() => setShowFilter(2)} 
                    >Masculino</Link>
                    <Link
                        to='/products' 
                        className={showFilter === 3 ? 'menu-item menu-item-active' : 'menu-item'}  
                        onMouseEnter={() => setShowFilter(3)} 
                    >Feminino</Link>
                    <Link 
                        to='/products' 
                        className={showFilter === 4 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(4)} 
                    >Juvenil</Link>
                    <Link 
                        to='/products' 
                        className={showFilter === 5 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(5)} 
                    >Calçados</Link>
                    <Link 
                        to='/products' 
                        className={showFilter === 6 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                    >Acessórios</Link>
                    <Link 
                        to='/products' 
                        className={showFilter === 7 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                    >Óculos</Link>
                    <Link 
                        to='/products' 
                        className={showFilter === 8 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                    >Relógio</Link>
                    <Link 
                        to='/products' 
                        className={showFilter === 9 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                    >Outlet</Link>
                </nav>
                <div className={showFilter === 0 ? 'menu-filter-container filter-hide' : 'menu-filter-container'}>
                    {switchFilter()}
                </div>
            </div>
        </header>
    )
}

export default Header;
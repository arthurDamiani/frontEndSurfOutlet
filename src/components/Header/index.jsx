import React, {useState} from 'react'
import {TextField, InputAdornment} from '@material-ui/core'
import {Search, AccountCircle} from '@material-ui/icons'
import {FaBars} from 'react-icons/fa'
import './header.css'
import { Link } from 'react-router-dom'
import FloatCart from '../FloatCart'

function Header() {
    const [search, setSearch] = useState('')
    const [sidebar, setSidebar] = useState(false)
    const [showFilter, setShowFilter] = useState(0)

    const showSideBar = () => setSidebar(!sidebar)

    function switchFilter() {
        switch (showFilter) {
            case 1:
                return <a>Laicra</a>
            case 2:
                return <a>Camiseta</a>
            case 3:
                return <a>Top</a>
            case 4:
                return <a>Tênis</a>
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
            <nav className='header-top' onClick={showFilter}>
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
                    <div className="nav-item">
                        <FloatCart />
                    </div>
                </nav>
            </nav>
            <div onMouseLeave={() => setShowFilter(0)}>
                <nav onClick={showSideBar} className={sidebar ? 'menu-container active' : 'menu-container'}>
                    <div className='sidebar-top'>
                        <Link to='#' className='sidebar-item'>
                            <AccountCircle fontSize="large" />
                            <p className='nav-item-legenda'>Entre ou cadastre-se</p>
                        </Link>
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
                    >Calçados</a>
                    <a 
                        href='/products' 
                        className={showFilter === 5 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(5)} 
                    >Juvenil</a>
                    <a 
                        href='/products' 
                        className={showFilter === 6 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(6)} 
                    >Óculos</a>
                    <a 
                        href='/products' 
                        className={showFilter === 7 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(7)} 
                    >Relógios</a>
                    <a 
                        href='/products' 
                        className={showFilter === 8 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(8)} 
                    >Acessórios</a>
                    <a 
                        href='/products' 
                        className={showFilter === 9 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(9)} 
                    >Marcas</a>
                </nav>
                <div className={showFilter === 0 ? 'menu-filter-container filter-hide' : 'menu-filter-container'}>
                    {switchFilter()}
                </div>
            </div>
        </header>
    )
}

export default Header;
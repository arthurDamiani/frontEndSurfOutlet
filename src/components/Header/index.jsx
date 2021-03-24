import React, {useState, useEffect, Fragment} from 'react'
import { Link, useHistory } from 'react-router-dom'

import {TextField, InputAdornment} from '@material-ui/core'
import {Search, AccountCircle} from '@material-ui/icons'
import "antd/dist/antd.css"
import { Menu, Dropdown } from "antd"
import { UserOutlined } from "@ant-design/icons"
import {FaBars} from 'react-icons/fa'
import './header.css'

import FloatCart from '../FloatCart'

import api from '../../services/api'
import masc from '../../assets/headerMasc.jpg'
import fem from '../../assets/headerFem.jpg'
import kid from '../../assets/headerKidd.jpg'

function Header() {

    const [search, setSearch] = useState('')
    const [sidebar, setSidebar] = useState(false)
    const [showFilter, setShowFilter] = useState(0)
    const [userName, setUserName] = useState('')

    const history = useHistory()

    const showSideBar = () => setSidebar(!sidebar)

    const token = sessionStorage.getItem('key')
    let authorized = sessionStorage.getItem('authorized')

    console.log(authorized)

    api.defaults.headers.common['Authorization'] = 'Bearer ' + token

    async function getUserData() {
        await api.get('/usuario')
        .then((res) => setUserName(res.data.nomeCompleto))
    }

    useEffect(() => getUserData(), [authorized])


       
    function switchFilter() {
        switch (showFilter) {
            case 1:
                return (
                    <div className='wrapper-surf-options'>
                        <div className='surf-options'>
                            <Link to='/produtos/Surf/Prancha' className='surf-options-link'>PRANCHAS</Link>
                            <Link to='/produtos/Surf/Wetsuit' className='surf-options-link'>WETSUITS</Link>
                            <Link to='/produtos/Surf/Leash' className='surf-options-link'>LEASH</Link>
                            <Link to='/produtos/Surf/Rack' className='surf-options-link'>RACKS</Link>
                            <Link to='/produtos/Surf/Quilha' className='surf-options-link'>QUILHAS</Link>
                            <Link to='/produtos/Surf/Standup' className='surf-options-link'>STAND UP</Link>
                        </div>

                        <img 
                            className='surf-image'
                            src="https://images.tcdn.com.br/img/img_prod/812998/1612288585_wetsuits-01-min.jpg" 
                            alt='imagem de surf'
                        />
                    </div>
                )
            case 2:
                return (
                    <div className='wrapper-content-genre'>
                        <div className='wrapper-genre'>
                            <div className='header-genre'>
                                <Link to='/produtos/Masculino/Vestuario' className='header-genre'>VESTUÁRIO</Link>
                            </div>
                            <div className='subtitle-vest'>
                                <Link to='/produtos/Masculino/Vestuario/Camiseta' className='subtitle-vest-link'>CAMISETAS</Link>
                                <Link to='/produtos/Masculino/Vestuario/Camisa' className='subtitle-vest-link'>CAMISAS</Link>
                                <Link to='/produtos/Masculino/Vestuario/Bermuda' className='subtitle-vest-link'>BERMUDAS</Link>
                                <Link to='/produtos/Masculino/Vestuario/Calça' className='subtitle-vest-link'>CALÇAS</Link>
                                <Link to='/produtos/Masculino/Vestuario/Jaqueta' className='subtitle-vest-link'>JAQUETA</Link>
                                <Link to='/produtos/Masculino/Vestuario/Moletom' className='subtitle-vest-link'>MOLETOM</Link>
                            </div>
                        </div>

                        <div className='wrapper-genre'>
                            <div className='header-genre'>
                                <Link to='/produtos/Masculino/Acessorios' className='header-genre'>ACESSÓRIOS</Link>
                            </div>
                            <div className='subtitle-vest'>
                                <Link to='/produtos/Masculino/Acessorios/Bone' className='subtitle-vest-link'>BONÉS</Link>
                                <Link to='/produtos/Masculino/Acessorios/Gorro' className='subtitle-vest-link'>GORROS</Link>
                                <Link to='/produtos/Masculino/Acessorios/Mochila' className='subtitle-vest-link'>MOCHILAS</Link>
                                <Link to='/produtos/Masculino/Acessorios/Carteira' className='subtitle-vest-link'>CARTEIRAS</Link>
                                <Link to='/produtos/Masculino/Acessorios/Cinto' className='subtitle-vest-link'>CINTOS</Link>
                            </div>
                        </div>

                        <img 
                            className='img-genre'
                            src={masc} 
                            alt='img-genre'
                        />
                    </div>
                )
            case 3:
                return (
                    <div className='wrapper-content-genre'>
                        <div className='wrapper-genre'>
                            <div className='header-genre'>
                                <Link to='/produtos/Feminino/Vestuario' className='header-genre'>VESTUÁRIO</Link>
                            </div>
                            <div className='subtitle-vest'>
                                <Link to='/produtos/Feminino/Vestuario/Camiseta' className='subtitle-vest-link'>CAMISETAS</Link>
                                <Link to='/produtos/Feminino/Vestuario/Camisa' className='subtitle-vest-link'>CAMISAS</Link>
                                <Link to='/produtos/Feminino/Vestuario/Bermuda' className='subtitle-vest-link'>BERMUDAS</Link>
                                <Link to='/produtos/Feminino/Vestuario/Calça' className='subtitle-vest-link'>CALÇAS</Link>
                                <Link to='/produtos/Feminino/Vestuario/Jaqueta' className='subtitle-vest-link'>JAQUETA</Link>
                                <Link to='/produtos/Feminino/Vestuario/Moletom' className='subtitle-vest-link'>MOLETOM</Link>
                            </div>
                        </div>

                        <div className='wrapper-genre'>
                            <div className='header-genre'>
                                <Link to='/produtos/Feminino/Acessorio' className='header-genre'>ACESSÓRIOS</Link>
                            </div>
                            <div className='subtitle-vest'>
                                <Link to='/produtos/Feminino/Acessorio/Bone' className='subtitle-vest-link'>BONÉS</Link>
                                <Link to='/produtos/Feminino/Acessorio/Gorro' className='subtitle-vest-link'>GORROS</Link>
                                <Link to='/produtos/Feminino/Acessorio/Mochila' className='subtitle-vest-link'>MOCHILAS</Link>
                                <Link to='/produtos/Feminino/Acessorio/Carteira' className='subtitle-vest-link'>CARTEIRAS</Link>
                                <Link to='/produtos/Feminino/Acessorio/Cinto' className='subtitle-vest-link'>CINTOS</Link>
                            </div>
                        </div>

                        <img 
                            className='img-genre'
                            src={fem} 
                            alt='img-genre'
                        />
                    </div>
                )
            case 4:
                return (
                    <div className='wrapper-content-genre'>
                        <div className='wrapper-genre'>
                            <div className='header-genre'>
                                <Link to='/produtos/Juvenil/Vestuario' className='header-genre'>VESTUÁRIO</Link>
                            </div>
                            <div className='subtitle-vest'>
                                <Link to='/produtos/Juvenil/Vestuario/Camiseta' className='subtitle-vest-link'>CAMISETAS</Link>
                                <Link to='/produtos/Juvenil/Vestuario/Camisa' className='subtitle-vest-link'>CAMISAS</Link>
                                <Link to='/produtos/Juvenil/Vestuario/Bermuda' className='subtitle-vest-link'>BERMUDAS</Link>
                                <Link to='/produtos/Juvenil/Vestuario/Calça' className='subtitle-vest-link'>CALÇAS</Link>
                                <Link to='/produtos/Juvenil/Vestuario/Jaqueta' className='subtitle-vest-link'>JAQUETA</Link>
                                <Link to='/produtos/Juvenil/Vestuario/Moletom' className='subtitle-vest-link'>MOLETOM</Link>
                            </div>
                        </div>

                        <div className='wrapper-genre'>
                            <div className='header-genre'>
                                <Link to='/produtos/Juvenil/Acessorio' className='header-genre'>ACESSÓRIOS</Link>
                            </div>
                            <div className='subtitle-vest'>
                                <Link to='/produtos/Juvenil/Acessorio/Bone' className='subtitle-vest-link'>BONÉS</Link>
                                <Link to='/produtos/Juvenil/Acessorio/Gorro' className='subtitle-vest-link'>GORROS</Link>
                                <Link to='/produtos/Juvenil/Acessorio/Mochila' className='subtitle-vest-link'>MOCHILAS</Link>
                                <Link to='/produtos/Juvenil/Acessorio/Carteira' className='subtitle-vest-link'>CARTEIRAS</Link>
                                <Link to='/produtos/Juvenil/Acessorio/Cinto' className='subtitle-vest-link'>CINTOS</Link>
                            </div>
                        </div>

                        <img 
                            className='img-genre'
                            src={kid} 
                            alt='img-genre'
                        />
                    </div>
                )
            case 5:
                return (
                    <div className='wrapper-header-image-calcado'>
                        <div className='header-image-calcado'>
                            <img 
                                src="https://images.tcdn.com.br/img/img_prod/812998/1612288585_wetsuits-01-min.jpg" 
                                alt='header-img'
                            />
                            <Link to='/produtos' className='masc-calc'>MASCULINO</Link>
                        </div>
                        
                        <div className='header-image-calcado-2'>
                            <img 
                                src="https://images.tcdn.com.br/img/img_prod/812998/1612288585_wetsuits-01-min.jpg" 
                                alt='header-img'
                            />
                            <Link to='/produtos' className='fem-calc'>FEMININO</Link>
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


     const logOut = async () => {
         sessionStorage.clear()
         window.location.reload();
    }

    
    const menuLoginOn = (
        <Menu >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Minha conta
          </Menu.Item>
        <Menu.Item onClick={logOut} key="2" icon={<UserOutlined />}>
            Sair
        </Menu.Item>
        </Menu>
    )

    const menuLoginOff= (
        <Menu >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Fazer login ou cadastrar-se
          </Menu.Item>
        </Menu>
    )


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
                    <Link to={authorized ? '/dash' : '/login'} className='nav-item'>
                        <div>
                            {
                                authorized ? 
                                <Dropdown.Button overlay={menuLoginOn} placement="bottomCenter" icon={<UserOutlined />} > {userName} </Dropdown.Button> : 
                                <Dropdown.Button overlay={menuLoginOff} placement="bottomCenter" icon={<UserOutlined />} > Surf Outlet </Dropdown.Button>
                            }
                        </div>
                    </Link>
                    <div className="nav-item">
                        <FloatCart />
                    </div>
                </nav>
            </nav>
            <div onMouseLeave={() => setShowFilter(0)}>
                <nav onClick={showSideBar} className={sidebar ? 'menu-container active' : 'menu-container'}>
                    <div className='sidebar-top'>
                        <Link to={authorized ? '/dash' : '/login'} className='sidebar-item'>
                            <AccountCircle fontSize="large" />
                            <p className='nav-item-legenda'>{authorized ? userName : 'Entre ou cadastre-se'}</p>
                        </Link>
                    </div>

                    <Link 
                        to='/produtos/Surf' 
                        className={showFilter === 1 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(1)} 
                        >Surf
                    </Link>

                    <Link
                        to='/produtos/Masculino' 
                        className={showFilter === 2 ? 'menu-item menu-item-active' : 'menu-item'}  
                        onMouseEnter={() => setShowFilter(2)} 
                        >Masculino
                    </Link>

                    <Link
                        to='/produtos/Feminino' 
                        className={showFilter === 3 ? 'menu-item menu-item-active' : 'menu-item'}  
                        onMouseEnter={() => setShowFilter(3)} 
                        >Feminino
                    </Link>

                    <Link 
                        to='/produtos/Juvenil' 
                        className={showFilter === 4 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(4)} 
                        >Juvenil
                    </Link>

                    <Link 
                        to='/produtos/Calçados' 
                        className={showFilter === 5 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(5)} 
                        >Calçados
                    </Link>

                    <Link 
                        to='/produtos/Acessorios' 
                        className={showFilter === 6 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                        >Acessórios
                    </Link>

                    <Link 
                        to='/produtos/Oculos' 
                        className={showFilter === 7 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                        >Óculos
                    </Link>

                    <Link 
                        to='/produtos/Relogio' 
                        className={showFilter === 8 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                        >Relógio
                    </Link>

                    <Link 
                        to='/produtos/' 
                        className={showFilter === 9 ? 'menu-item menu-item-active' : 'menu-item'} 
                        onMouseEnter={() => setShowFilter(0)} 
                        >Outlet
                    </Link>

                </nav>
                <div className={showFilter === 0 ? 'menu-filter-container filter-hide' : 'menu-filter-container'}>
                    {switchFilter()}
                </div>
            </div>
        </header>
    )
}

export default Header
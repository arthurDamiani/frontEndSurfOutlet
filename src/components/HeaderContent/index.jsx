import React from 'react'
import './headerContent.css'

const HeaderContent = ({masc}) => {

    return (
        <>
            <div className='wrapper-header'>
                <div className='header-title'>
                    <a href='/products'>VESTUÁRIO</a>
                </div>
                <div className='header-subtitle-vest'>
                    <a href='/products'>CAMISETAS</a>
                    <a href='/products'>CAMISAS</a>
                    <a href='/products'>BERMUDAS</a>
                    <a href='/products'>CALÇAS</a>
                    <a href='/products'>JAQUETA</a>
                    <a href='/products'>MOLETOM</a>
                </div>
            </div>

            <div className='wrapper-header'>
                <div className='header-title'>
                    <a href='/products'>ACESSÓRIOS</a>
                </div>
                <div className='header-subtitle-vest'>
                    <a href='/products'>BONÉS</a>
                    <a href='/products'>GORROS</a>
                    <a href='/products'>MOCHILAS</a>
                    <a href='/products'>CARTEIRAS</a>
                    <a href='/products'>CINTOS</a>
                </div>
            </div>

                <img 
                    className='header-img'
                    src={masc} 
                    alt='header-img'
                    href='/products'
                />
        </>
        
    )
}

export default HeaderContent
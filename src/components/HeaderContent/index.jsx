import React from 'react'
import './headerContent.css'

const HeaderContent = ({masc}) => {

    return (
        <>
            <div className='wrapper-header'>
                <div className='header-title'>
                    <a href='/produtos'>VESTUÁRIO</a>
                </div>
                <div className='header-subtitle-vest'>
                    <a href='/produtos'>CAMISETAS</a>
                    <a href='/produtos'>CAMISAS</a>
                    <a href='/produtos'>BERMUDAS</a>
                    <a href='/produtos'>CALÇAS</a>
                    <a href='/produtos'>JAQUETA</a>
                    <a href='/produtos'>MOLETOM</a>
                </div>
            </div>

            <div className='wrapper-header'>
                <div className='header-title'>
                    <a href='/produtos'>ACESSÓRIOS</a>
                </div>
                <div className='header-subtitle-vest'>
                    <a href='/produtos'>BONÉS</a>
                    <a href='/produtos'>GORROS</a>
                    <a href='/produtos'>MOCHILAS</a>
                    <a href='/produtos'>CARTEIRAS</a>
                    <a href='/produtos'>CINTOS</a>
                </div>
            </div>

            <img 
                className='header-img'
                src={masc} 
                alt='header-img'
                href='/produtos'
            />
        </>
        
    )
}

export default HeaderContent
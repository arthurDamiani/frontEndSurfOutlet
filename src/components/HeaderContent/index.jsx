import React from 'react'
import './headerContent.css'

const HeaderContent = ({masc}) => {

    return (
        <>
            <div className='wrapper-header'>
                <div className='header-title'>
                    <a>VESTUÁRIO</a>
                </div>
                <div className='header-subtitle-vest'>
                    <a>CAMISETAS</a>
                    <a>CAMISAS</a>
                    <a>BERMUDAS</a>
                    <a>CALÇAS</a>
                    <a>JAQUETA</a>
                    <a>MOLETOM</a>
                </div>
            </div>

            <div className='wrapper-header'>
                <div className='header-title'>
                    <a>ACESSÓRIOS</a>
                </div>
                <div className='header-subtitle-vest'>
                    <a>BONÉS</a>
                    <a>GORROS</a>
                    <a>MOCHILAS</a>
                    <a>CARTEIRAS</a>
                    <a>CINTOS</a>
                </div>
            </div>

            <img 
                className='header-img'
                src={masc} 
                alt='header-img'
            />
        </>
        
    )
}

export default HeaderContent
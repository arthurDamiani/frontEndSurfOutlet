import React from 'react'
import './headerContent.css'

const HeaderContent = ({masc}) => {

    return (
        <>
            <div className='wrapper-header'>
                <div className='header-title'>
                    <a>Vestuário</a>
                </div>
                <div className='header-subtitle-vest'>
                    <a>Camisetas</a>
                    <a>Camisas</a>
                    <a>Bermudas</a>
                    <a>Calças</a>
                    <a>Jaqueta</a>
                    <a>Moletom</a>
                </div>
            </div>

            <div className='wrapper-header'>
                <div className='header-title'>
                    <a>Acessórios</a>
                </div>
                <div className='header-subtitle-vest'>
                    <a>Bonés</a>
                    <a>Gorros</a>
                    <a>Mochilas</a>
                    <a>Carteiras</a>
                    <a>Cintos</a>
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
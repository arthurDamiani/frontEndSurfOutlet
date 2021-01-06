import React from 'react'
import ProductsSlider from '../components/ProductsSlider'
import {imageData} from '../components/CarouselImage/imageData'
import CarouselImage from '../components/CarouselImage'
import {Payment, LocalShipping, AttachMoney} from '@material-ui/icons'
import modeloPe from '../assets/modelo.png'
import modeloLado from '../assets/modelo2.png'

import '../styles/Landing.css'

function Landing() {
    return(
        <div className='landing-container'>
            <CarouselImage slides={imageData}/>
            <div className='payment-information-container'>
                <div className='payment-information'>
                    <Payment fontSize='large' />
                    <p className='payment-information-text'>Parcele suas compras em até 7x no <strong>CARTÃO</strong></p>
                </div>
                <div className='payment-information'>
                    <LocalShipping fontSize='large' />
                    <div className='payment-information-text'>
                        <p className='centered'><strong>FRETE GRÁTIS</strong></p>
                        <p>R$200,00 - Sul e Sudeste</p>
                        <p>R$499,00 - Demais regiões</p>
                    </div>
                </div>
                <div className='payment-information'>
                    <AttachMoney fontSize='large' />
                    <p className='payment-information-text'>1% <strong>DESCONTO</strong> no <strong>BOLETO</strong></p>
                </div>
            </div>
            <div className='products-carousel-container'>
                <h3 className='products-carousel-title'>Novidades</h3>
                <ProductsSlider /> 
            </div>
            <div className='images-container'>
                <img className='left-image' src={modeloPe} alt='roupa billabong' />
                <div className='right-images-container'>
                    <img className='right-image' src={modeloLado} alt='Surfistas' />
                    <img className='right-image' src={modeloLado} alt='Surfistas' /> 
                </div>
            </div>
            <div className='products-carousel-container'>
                <h3 className='products-carousel-title'>Mais vendidos</h3>
                <ProductsSlider /> 
            </div>
            <div className="images-container">
                <img className='equal-images' src={modeloPe} alt='roupa billabong' />
                <img className='equal-images' src={modeloPe} alt='roupa billabong' />
            </div>
        </div>
    )
}

export default Landing;


import React from 'react'
import ProductsSlider from '../components/ProductsSlider'
import {imageData} from '../components/CarouselImage/imageData'
import CarouselImage from '../components/CarouselImage'
import {Payment, LocalShipping, AttachMoney} from '@material-ui/icons'

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
            <div className='new-products'>
                <h3 className='new-products-title'>Novidades</h3>
                <ProductsSlider /> 
            </div>
            
        </div>
    )
}

export default Landing;


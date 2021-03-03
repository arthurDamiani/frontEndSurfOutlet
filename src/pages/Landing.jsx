import React from 'react'

import CarouselImage from '../components/CarouselImage'
import {Payment, LocalShipping, AttachMoney} from '@material-ui/icons'
import modeloPe from '../assets/modelo.png'
import modeloLado from '../assets/modelo2.png'

import '../styles/Landing.css'
import ProductsSlider from '../components/ProductsSlider'

function Landing() {
    return(
        <div className='landing-container'>
            <CarouselImage />
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
                    <p className='payment-information-text'>10% de <strong>DESCONTO</strong> no <strong>BOLETO</strong></p>
                </div>
            </div>
            <div className='products-carousel-container'>
                <h3 className='products-carousel-title'>Novidades</h3>
                <ProductsSlider /> 
            </div>
            <div className='images-container'>
                <img className='left-image' src='https://images.boardriders.com/global/billabong-products/all/default/hi-res/j3sb29bimu_billabong,l_1220_frt1.jpg' alt='roupa billabong' />
                <div className='right-images-container'>
                    <img className='right-image' src="https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/kanui/images/129656a67616__banner_homesurf-BERMUDAS-SURF.jpg" alt='Surfistas' />
                    <img className='right-image' src={modeloLado} alt='Surfistas' /> 
                </div>
            </div>
            <div className='products-carousel-container'>
                <h3 className='products-carousel-title'>Mais vendidos</h3>
                <ProductsSlider /> 
            </div>
            <div className="images-container">
                <img className='equal-images' src='https://d2e5mvjndnxyoo.cloudfront.net/Custom/Content/Banners/50/50_banner637335224265250393.jpg' alt='roupa billabong' />
                <img className='equal-images' src='https://d2e5mvjndnxyoo.cloudfront.net/Custom/Content/Banners/51/51_banner637335222001214070.jpg' alt='roupa billabong' />
            </div>
        </div>
    )
}

export default Landing;


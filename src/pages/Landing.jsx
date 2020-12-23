import React from 'react'
import ProductsSlider from '../components/ProductsSlider'
import {imageData} from '../components/CarouselImage/imageData'
import CarouselImage from '../components/CarouselImage'
import Footer from '../components/Footer'

function Landing() {
    return(
        <div>
            <ProductsSlider />
            {/* <CarouselImage slides={imageData}/> */}
            <Footer />
        </div>
    )
}

export default Landing;


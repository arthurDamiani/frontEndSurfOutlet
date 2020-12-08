import React from 'react'
import ProductsSlider from '../../components/ProductsSlider'
import {imageData} from '../../components/CarouselImage/imageData'
import CarouselImage from '../../components/CarouselImage'

function Landing() {
    return(
        <div>
            <CarouselImage slides={imageData} />
        </div>
    )
}

export default Landing;


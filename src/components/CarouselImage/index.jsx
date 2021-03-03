import React from 'react'
import './carouselImage.css'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css" 

const ImageSlider = () => {
  
  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    selectedItem: 0,
    interval: 3000,
    transitionTime: 1100,
    swipeScrollTolerance: 5,
})

  return (
            <Carousel {...getConfigurableProps()}>
                <div className='wrapper-carousel-landing'>
                    <img src='https://d2e5mvjndnxyoo.cloudfront.net/Custom/Content/Banners/71/716_banner637485753180159385.jpg' alt='banner' style={{height: '500px'}}/>
                </div>
                <div className='wrapper-carousel-landing'>
                    <img src="https://d14amky6yu8q07.cloudfront.net/Custom/Content/Banners/68/68_banner637501919855005115.jpg" alt='banner' style={{height: '500px'}}/>
                </div>
                <div className='wrapper-carousel-landing'>
                    <img src='https://mormaiishop.vteximg.com.br/arquivos/ids/2445343/BANNER-SHORT-BOARDSHORT_1600x430.jpg?v=637472918891700000' alt='banner' style={{height: '500px'}}/>
                </div>
            </Carousel>
  )
}

export default ImageSlider
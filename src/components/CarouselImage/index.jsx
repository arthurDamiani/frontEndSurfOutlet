import React from 'react'

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
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    selectedItem:0,
    interval: 3000,
    transitionTime: 900,
    swipeScrollTolerance: 5,
})

  return (
            <Carousel {...getConfigurableProps()}>
                <div>
                    <img src='https://images.unsplash.com/photo-1488402024618-0658e4c2b1f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80' alt='banner' style={{height: '600px'}}/>
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1457234068269-b58092525794?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80' alt='banner' style={{height: '600px'}}/>
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1531850934-ea5b88733491?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1385&q=80' alt='banner' style={{height: '600px'}}/>
                </div>
            </Carousel>
  )
}

export default ImageSlider
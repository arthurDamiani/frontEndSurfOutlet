import React from 'react'
import './imageSlider.css'

const ImageSlider = () => {

    let time = 2000,
        currentImageIndex = 0,
        images = document.querySelectorAll('#slider img'),
        max = images.length
        console.log(images)


    const nextImage = () => {
        images[currentImageIndex].classList.remove('selected')

        currentImageIndex++

        if(currentImageIndex >= max) {
            currentImageIndex = 0
        }

        images[currentImageIndex].classList.add('selected')
    }

    const start = () => {
        setInterval(() => {
            nextImage()
        }, time)
    }  
    
    // window.addEventListener('load', start)

    return (
        <div className="slider-wrapper">
            <div id="slider">
                <img className='selected' src='https://images.unsplash.com/photo-1474402656496-6641a08dab21?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80' alt='surf'/>
                <img src='https://images.unsplash.com/photo-1474533810048-da8225067fd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80' alt='surf'/>
                <img src='https://images.unsplash.com/photo-1530870110042-98b2cb110834?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='surf'/>
            </div>
        </div>
    )
}

export default ImageSlider
import React, { useState } from 'react'
import { imageData } from './imageData'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './carouselImage.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
 

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)
  
  console.log(length)
  console.log(current)


  return (
    <section className='slider'>
      <NavigateBeforeIcon 
        onClick={prevSlide}
        className="left-arrow" 
        style={{fontSize: 50}}
      />
      <NavigateNextIcon 
        onClick={nextSlide}
        className="right-arrow" 
        style={{fontSize: 50}}
      />
      {imageData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='img' className='image' />
            )}
          </div>
        )
      })}
    </section>
  );
};

export default ImageSlider
import React, { useState, useEffect } from 'react'
import { imageData } from './imageData'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './carouselImage.css'
import { Link } from 'react-router-dom'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)

  useEffect(() => {
    let timer = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(timer)
  })
 

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

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
              <Link to={slide.link}><img href={slide.link} src={slide.image} alt='img' className='image' /></Link>
            )}
          </div>
        )
      })}
    </section>
  );
};

export default ImageSlider
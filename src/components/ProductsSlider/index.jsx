import React from 'react'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../../selectors/products'

import './productsSlider.css'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "bootstrap/dist/css/bootstrap-grid.css"
import { Link } from 'react-router-dom'


const ProductsSlider = () => {

    const products = useSelector(getAllProducts)

    
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true    
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    }

    return (
        <div className='container mt-5 carousel'>
            <Slider {...settings} className="slider">
                {
                    products.map(p => {
                        return (
                            <div className='card-wrapper'>
                                <div className='card'>
                                    <div className='card-image'>
                                        <img src={p.image} alt=''/>
                                    </div>
                                    <div className='details'>
                                        <h5>{p.title}<span className='price'>R${p.price}</span></h5>
                                        <Link to={`/detailsProducts/${p.id}`}>
                                          <button>Ver detalhes</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
        
    )
}

export default ProductsSlider
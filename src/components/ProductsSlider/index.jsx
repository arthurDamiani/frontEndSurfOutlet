import React from 'react'
import './productsSlider.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import roupa from '../../assets/roupa.png'
import "bootstrap/dist/css/bootstrap-grid.css"

const ProductsSlider = () => {
    
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear'
    }

    return (
        <div className='container mt-5 carousel'>
            <Slider {...settings} className="slider">
                <div className='card-wrapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={roupa} alt=''/>
                        </div>
                        <div className='details'>
                            <h3>JAQUETA DUPLA FACE BILLABONG<span className='price'>R$327,00</span></h3>
                        </div>
                    </div>
                </div>
                <div className='card-wrapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={roupa} alt=''/>
                        </div>
                        <div className='details'>
                            <h3>JAQUETA DUPLA FACE BILLABONG<span className='price'>R$327,00</span></h3>
                        </div>
                    </div>
                </div>
                <div className='card-wrapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={roupa} alt=''/>
                        </div>
                        <div className='details'>
                            <h3>JAQUETA DUPLA FACE BILLABONG<span className='price'>R$327,00</span></h3>
                        </div>
                    </div>
                </div>
                <div className='card-wrapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={roupa} alt=''/>
                        </div>
                        <div className='details'>
                            <h3>JAQUETA DUPLA FACE BILLABONG<span className='price'>R$327,00</span></h3>
                        </div>
                    </div>
                </div>
                <div className='card-wrapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={roupa} alt=''/>
                        </div>
                        <div className='details'>
                            <h3>JAQUETA DUPLA FACE BILLABONG<span className='price'>R$327,00</span></h3>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
        
    )
}

export default ProductsSlider
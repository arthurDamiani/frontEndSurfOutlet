import React from 'react'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../../selectors/products'

import './productsSlider.css'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { Link } from 'react-router-dom'

const ProductsSlider = () => {

    const products = useSelector(getAllProducts)

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1800 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1800, min: 1315 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1315, min: 1100 },
          items: 3
        },
        mobileX: {
          breakpoint: { max: 1100, min: 830 },
          items: 3
        },
        mobile: {
            breakpoint: { max: 830, min: 0 },
            items: 2
          }
    }

    return (
        <div>
            <Carousel 
                 responsive={responsive}
                 minimumTouchDrag={80}
                 renderButtonGroupOutside={false}
                 containerClass="container-padding-bottom"
                 infinite={true}
                 transitionDuration={500}
                 removeArrowOnDeviceType={["mobile"]}
                 autoPlaySpeed={2000}
                 slidesToSlide={1}
                 swipeable
                 renderDotsOutside={true}
                 autoPlay
            >
            {
                    products.map((p, i) => {
                        return (
                            <div className='card-wrapper' key={i}>
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
            </Carousel>
        </div>
        
    )
}

export default ProductsSlider
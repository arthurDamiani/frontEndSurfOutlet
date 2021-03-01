import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../selectors/products'
import FadeLoader from "react-spinners/FadeLoader"

import api from '../../services/api'
import './productsSlider.css'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { Link } from 'react-router-dom'
import { getProducts } from '../../actions/products'

const ProductsSlider = () => {
    const dispatch = useDispatch()
    const products = useSelector(getAllProducts)
    const [loading, setLoading] = useState(false)

    useMemo(() => {
      const fetchProducts = async () => {
          products.length > 0 ? setLoading(false) : setLoading(true)
          
          const res = await api.get('/produto')
          const prod = (res.data.retorno.produtos).map(el => el.produto)

          console.log(prod)
          
          dispatch(getProducts(prod)) 
      }

      fetchProducts()
  }, [dispatch, products.length])

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
            {
                loading === true ?
                <div className="spinner">
                            <FadeLoader color={'#0080A8'} loading={loading} height={35} width={7.5} radius={5} margin={15} />
                </div>
                :

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
                                          <h5>{p.descricao}<span className='price'>R${p.preco.replace('.', ',')}</span></h5>
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
            }
        </div>
        
    )
}

export default ProductsSlider
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import FadeLoader from "react-spinners/FadeLoader"
import './product.css'
import Product from '../Products/ProductCard'
import Filter from '../Filter'
import api from '../../services/api'
import ReactPaginate from 'react-paginate'

import { getFilteredProducts } from '../../selectors/products'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/products'
 
const ProductCardList = () => {
    const dispatch = useDispatch()

    const products = useSelector(getFilteredProducts)   

    const [sort, setSort] = useState('')

    const [loading, setLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = (4745 / 100)

    useMemo(() => {
        const fetchProducts = async () => {
            products.length > 0 ? setLoading(false) : setLoading(true)

            const res = await api.get('/produto/' + currentPage)
            const prod = (res.data.retorno.produtos).map(el => el.produto)
            
            dispatch(getProducts(prod)) 
        }

        fetchProducts()
    }, [currentPage, dispatch, products.length])
    
    const changePage = ({selected}) => {
        setCurrentPage(selected + 1) 
    }

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0, {behavior: 'smooth'})
          }, 700)
        
      }, [currentPage])

    const handleChangeSort = e => {
       setSort(e.target.value) 

       if(sort !== '') {
        products.sort((a, b) => (sort === 'menor') ? (a.preco < b.preco ? 1 : -1) : (a.preco > b.preco ? 1 : -1))
       } else {
        products.sort((a, b) => (a.id < b.id ? 1 : -1))
       }
       return products 
    }

    return ( 
        <Fragment>
            <div className='products-wrapper'>
                <div className='filter-sort'>
                    <p>{products.length} produtos encontrados</p>
                        <select value={sort} onChange={handleChangeSort}>
                            <option value=''>Ordenar por preço</option>
                            <option value='menor'>Menor para maior</option>
                            <option value='maior'>Maior para menor</option>
                        </select>
                </div>

                    {
                        loading === true ? 
                        <div className="spinner">
                            <FadeLoader color={'#0080A8'} loading={loading} height={35} width={7.5} radius={5} margin={15} />
                        </div>
                         :
                         <div className="products">
                            { products.map(product => <Product product={product} key={product.id} />) }

                            <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                pageCount={totalPages}
                                onPageChange={changePage}
                                containerClassName={'paginationsBttn'}
                                previousLinkClassName={'previousBttn'}
                                nextLinkClassName={'nextBttn'}
                                disabledClassName={'paginationDisabled'}
                                activeClassName={'paginationActive'}
                            />
                         </div>
                    
                    }
                    
                <div className="filter">
                        <Filter />
                </div>

            </div>
        </Fragment>
    )
}

export default ProductCardList
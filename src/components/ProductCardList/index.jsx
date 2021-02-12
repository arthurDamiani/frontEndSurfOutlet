import React, { Fragment, useEffect, useMemo, useState } from 'react'
import FadeLoader from "react-spinners/FadeLoader"
import './product.css'
import Product from '../Products/ProductCard'
import Filter from '../Filter'
import Pagination from '../Pagination'
import api from '../../services/api'

import { getFilteredProducts } from '../../selectors/products'
import { useSelector } from 'react-redux'
 
const ProductCardList = () => {
    const filteredProducts = useSelector(getFilteredProducts)   

    const [posts, setPosts] = useState(filteredProducts)
    const [loading, setLoading] = useState(false)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(9)

    // useMemo(() => {
    //     const fetchProducts = async () => {
    //         posts.length > 0 ? setLoading(false) : setLoading(true)

    //         const res = await api.get('/produto')
    //         const products = (res.data.retorno.produtos).map(el => el.produto)
    //         setPosts(products)
    //     }

    //     fetchProducts()
    // }, [posts.length])

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    //CHANGE PAGE
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const [sort, setSort] = useState('')

    const handleChangeSort = e => {
       setSort(e.target.value) 

       if(sort !== '') {
        posts.sort((a, b) => (sort === 'menor') ? (a.price < b.price ? 1 : -1) : (a.price > b.price ? 1 : -1))
       } else {
        posts.sort((a, b) => (a.id < b.id ? 1 : -1))
       }
       return posts 
    }

    return ( 
        <Fragment>
            <div className='products-wrapper'>
                <div className='filter-sort'>
                    <p>{currentPosts.length} produtos encontrados</p>
                        <select value={sort} onChange={handleChangeSort}>
                            <option value=''>Ordenar por preço</option>
                            <option value='menor'>Menor para maior</option>
                            <option value='maior'>Maior para menor</option>
                        </select>
                </div>

                <div className="products">
                   
                    {
                        loading === true ? 
                        <div className="spinner">
                            <FadeLoader color={'#0080A8'} loading={loading} height={35} width={7.5} radius={5} margin={15} />
                        </div>
                         :
                        currentPosts.map(product => <Product product={product} key={product.id} />)
                    }

                    <Pagination productsPerPage={postPerPage} totalProducts={posts.length} paginate={paginate} />  
                    
                </div>


                <div className="filter">
                        <Filter />
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCardList
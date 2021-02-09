import React, { Fragment, useEffect, useState } from 'react'
import FadeLoader from "react-spinners/FadeLoader"
import './product.css'
import Product from '../Products/ProductCard'
import Filter from '../Filter'
import Pagination from '../Pagination'
import api from '../../services/api'

import { getFilteredProducts } from '../../selectors/products'
import { useSelector } from 'react-redux'

import axios from 'axios'
 
const ProductCardList = () => {
    const filteredProducts = useSelector(getFilteredProducts)

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(9)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(false)
            // const res = await axios.get('url')
            // setPosts(res.data)
            setPosts(filteredProducts)
        }

        fetchProducts()
    })

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    //CHANGE PAGE
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const [sort, setSort] = useState('')

    const handleChangeSort = e => {
       setSort(e.target.value) 

       if(sort !== '') {
        filteredProducts.sort((a, b) => (sort === 'menor') ? (a.price < b.price ? 1 : -1) : (a.price > b.price ? 1 : -1))
       } else {
        filteredProducts.sort((a, b) => (a.id < b.id ? 1 : -1))
       }
       return filteredProducts 
    }

    async function getProducts() {
        await api.get('/produto')
        .then((res) => console.log(res.data.retorno.produtos))
        .catch(() => alert('deu ruim!'))
    }
    getProducts()

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
                        <FadeLoader color={'#0080A8'} loading={loading} height={70} width={15} radius={10} margin={2} className='spinner' /> :
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
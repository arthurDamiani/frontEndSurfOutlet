import React, { Fragment, useEffect, useState } from 'react'
import FadeLoader from "react-spinners/FadeLoader"
import './product.css'
import Product from '../Products/ProductCard'
import Filter from '../Filter'
import api from '../../services/api'

import { getFilteredProducts } from '../../selectors/products'
import { useSelector } from 'react-redux'
 
const ProductCardList = () => {
    const filteredProducts = useSelector(getFilteredProducts)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
        filteredProducts ? setLoading(false) : setLoading(true)
    }, [filteredProducts])

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

    return ( 
        <Fragment>
            <div className='products-wrapper'>
                <div className='filter-sort'>
                    <p>{filteredProducts.length} produtos encontrados</p>
                        <select value={sort} onChange={handleChangeSort}>
                            <option value=''>Ordenar por preço</option>
                            <option value='menor'>Menor para maior</option>
                            <option value='maior'>Maior para menor</option>
                        </select>
                </div>

                

                <div className="products">
                    <FadeLoader color={'#0080A8'} loading={loading} height={30} width={5} radius={10} margin={2} />
                    {filteredProducts.map(product => <Product product={product} key={product.id} />)}
                </div>

                <div className="filter">
                        <Filter />
                </div>
            </div>
        </Fragment>
        
    )
}

export default ProductCardList
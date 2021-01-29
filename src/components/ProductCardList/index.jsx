import React, { Fragment, useState } from 'react'
import './product.css'
import Product from '../Products/ProductCard'
import Filter from '../Filter/Filter'

import { getFilteredProducts } from '../../selectors/products'
import { useSelector } from 'react-redux'
 
const ProductCardList = () => {
    const filteredProducts = useSelector(getFilteredProducts)

    //SORT FILTER PRODUCTS
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

    return ( 
        <Fragment>
            <div className='products-wrapper'>
                <div className='filter-sort'>
                    <p>{filteredProducts.length} produtos encontrados</p>
                    <label>
                        Ordenar 
                        <select value={sort} onChange={handleChangeSort}>
                            <option value=''>Selecione</option>
                            <option value='menor'>menor para maior</option>
                            <option value='maior'>maior para menor</option>
                        </select>
                    </label>
                </div>

                <div className="products">
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
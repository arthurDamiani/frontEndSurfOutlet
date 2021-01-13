import React from 'react'
import ProductCardList from '../components/ProductCardList'
import Filter from '../components/Filter'

function Products() {
    return(
        <div>
            <Filter />
            <ProductCardList />
        </div>
    )
}

export default Products
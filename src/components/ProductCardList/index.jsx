import React, { useState } from 'react'
import productData  from '../../data/products'
import './productCard.css'
import Pagination from '../Pagination'
import { FaChevronRight, FaChevronLeft} from "react-icons/fa"
import Product from '../Product'
import Filter from '../Filter'
import ShelfHeaderProd from '../ShelfHeaderProd'

const ProductCardList = () => {
    const [products] = useState(productData)
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(9)

    //Pagination
    const indexOfLastProducts = currentPage * productsPerPage
 
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage
 
    const lastPage = Math.ceil(products.length / productsPerPage)
 
    const nextIndexProducts = () => currentPage !== lastPage ? setCurrentPage(currentPage + 1) : lastPage
    const prevIndexProducts = () => currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const currentProduct = products.slice(indexOfFirstProducts, indexOfLastProducts)

    return ( 
        <div className='products-wrapper'>
             <div className="products">
                {currentProduct.map(product => {
                return (
                    <Product product={product} key={product.id} />
                )
                })}
            </div>
            <div className="filter">
                    <Filter />
                </div>
                <nav className='pagination'>
                    <FaChevronLeft 
                        className='arrow-left'
                        onClick={prevIndexProducts}
                    />
                    <Pagination 
                        productsPerPage={productsPerPage} 
                        totalProducts={products.length} 
                        paginate={paginate}
                        className='page-item' 
                    />
                    <FaChevronRight 
                        className='arrow-right'
                        onClick={nextIndexProducts}
                    />
                </nav>
        </div>
    )
}

export default ProductCardList
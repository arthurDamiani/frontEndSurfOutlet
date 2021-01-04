import React from 'react';
import { useState } from 'react';
import productCard  from './productCard'
import './productCard.css'
import Pagination from '../Pagination'
import { FaChevronRight, FaChevronLeft} from "react-icons/fa";
import Product from '../Product';

const ProductCardList = (id, title, price, image, size) => {
    const [products] = useState(productCard)
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
                    <Product 
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        condition_payment={product.condition_payment}
                        discount={product.discount}
                    />
                )
                })}
                <nav>
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
        </div>
    )
}

export default ProductCardList
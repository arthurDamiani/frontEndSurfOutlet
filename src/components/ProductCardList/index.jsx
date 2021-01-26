import React, { useState } from 'react'
import productData  from '../../data/products'
import './product.css'
import Pagination from '../Pagination'
import { FaChevronRight, FaChevronLeft} from "react-icons/fa"
import Product from '../Products/ProductCard'
import Filter from '../Filter'
 
const ProductCardList = () => {
    const [products] = useState(productData)
    
    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(9)

    const indexOfLastProducts = currentPage * productsPerPage
 
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage
 
    const lastPage = Math.ceil(products.length / productsPerPage)
 
    const nextIndexProducts = () => currentPage !== lastPage ? setCurrentPage(currentPage + 1) : lastPage

    const prevIndexProducts = () => currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage

    //CHANGE PAGE
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const [currentProduct, setCurrentProduct] = useState(products.slice(indexOfFirstProducts, indexOfLastProducts))

    //SORT FILTER PRODUCTS
    const [sort, setSort] = useState('')
    
    const handleChangeSort = e => {
       setSort(e.target.value) 

       if(sort !== '') {
            setCurrentProduct(currentProduct.sort((a, b) => (sort === 'menor') ? (a.price < b.price ? 1 : -1) : (a.price > b.price ? 1 : -1)))
       } else {
            setCurrentProduct(currentProduct.sort((a, b) => (a.id < b.id ? 1 : -1)))
       }
       return currentProduct
    }


    return ( 
        <div className='products-wrapper'>

            <div className='filter-sort'>
                <p>{currentProduct.length} produtos encontrados</p>
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
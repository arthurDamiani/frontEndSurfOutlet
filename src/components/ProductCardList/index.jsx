import React from 'react';
import { useState } from 'react';
import productCard  from './productCard'
import './productCard.css'
import ShoppingCart from '../ShoppingCart'
import Pagination from '../Pagination'
import { FaChevronRight, FaChevronLeft} from "react-icons/fa";

const ProductCardList = () => {
    const page_prod = 'products'
    const page_cart = 'cart'

    const [cart, setCart] = useState([])
    const [pageCurrent, setPageCurrent] = useState(page_prod)

    const addToCart = product => setCart([...cart, {...product}])

    const removeFromCart = productToRemove => setCart(cart.filter(product => product !== productToRemove))

    const navigateTo = nextPage => setPageCurrent(nextPage)

    const [products, setProducts] = useState(productCard)
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(9)

    const indexOfLastProducts = currentPage * productsPerPage
    console.log(indexOfLastProducts)

    const indexOfFirstProducts = indexOfLastProducts - productsPerPage
    console.log(indexOfFirstProducts)

    const currentProduct = products.slice(indexOfFirstProducts, indexOfLastProducts)
    console.log(currentPage)

    const lastPage = Math.ceil(products.length / productsPerPage)
    console.log(lastPage)

    const nextIndexProducts = () => currentPage !== lastPage ? setCurrentPage(currentPage + 1) : lastPage
    const prevIndexProducts = () => currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    const renderProducts = [
        <div className='products-wrapper'>
            <div className="products">
                {currentProduct.map(product => {
                return (
                    <div className="card-grid" key={product.id}>
                        <div className="img-content">
                            <img src={product.image} alt='imagem do produto'/>
                            <button onClick={() => addToCart(product)}>Ver detalhes</button>
                        </div>
                        <div className="content">
                            <h3>{product.title}</h3>
                            <p className='price'>R${product.price}</p>
                            <p className='payment'>{product.condition_payment}</p>
                            <p className='discount'>{product.discount}</p>
                        </div>
                    </div>
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
    ]

    return ( 
        <div>
            <header>
                <button onClick={() => navigateTo(page_cart)}>Go to Cart ({cart.length})</button>
                <button onClick={() => navigateTo(page_prod)}>X</button>
            </header>
            {pageCurrent === 'products' && renderProducts}
            {pageCurrent === 'cart' && 
                <ShoppingCart 
                    removeFromCart={removeFromCart}
                    cart={cart} 
                />
            }
        </div>
    )
}

export default ProductCardList
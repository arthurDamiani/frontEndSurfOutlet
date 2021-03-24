import React, { Fragment, useEffect, useMemo, useState } from 'react'
import FadeLoader from "react-spinners/FadeLoader"
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Breadcrumb } from 'antd'

import './product.css'
import Product from '../Products/ProductCard'
import Filter from '../Filter'
import api from '../../services/api'
import ReactPaginate from 'react-paginate'

import { getAllProducts, getEstoque } from '../../selectors/products'
import { getProducts } from '../../actions/products'
 
const ProductCardList = () => {
    const dispatch = useDispatch()

    const categoria = useParams().categoria
    const subcategoria = useParams().subcategoria
    const tipo = useParams().tipo

    const products = useSelector(getAllProducts)  

    const estoque = useSelector(getEstoque)  
    console.log(estoque)

    const [sort, setSort] = useState('')

    const [loading, setLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = (4745 / 100)

    useEffect(() => {
        const fetchProducts = async () => {
            products.length > 0 ? setLoading(false) : setLoading(true)

            if(subcategoria !== undefined && tipo !== undefined) {
                const res = await api.get(`/produtos/categoria?categoria=${categoria}&subcategoria=${subcategoria}&tipo=${tipo}`)
                const prod = (res.data).map(el => el.produto)
                dispatch(getProducts(prod))
            } else if(subcategoria !== undefined && tipo === undefined) {
                const res = await api.get(`/produtos/categoria?categoria=${categoria}&subcategoria=${subcategoria}`)
                const prod = (res.data).map(el => el.produto)
                dispatch(getProducts(prod))
            } else if(subcategoria === undefined && tipo === undefined && categoria !== undefined) {
                const res = await api.get(`/produtos/categoria?categoria=${categoria}`)
                const prod = (res.data).map(el => el.produto)
                dispatch(getProducts(prod))
            } else { //CONDIÇÃO APENAS PARA TESTES
                const res = await api.get('/produtos/categoria?')
                const prod = (res.data).map(el => el.produto)
                dispatch(getProducts(prod))
            }
        }

        fetchProducts()
    }, [dispatch, categoria, subcategoria, tipo])


    const changePage = ({selected}) => setCurrentPage(selected + 1) 

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0, {behavior: 'smooth'})
          }, 2000)
        
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

    const removeIdDuplicate = (id) => id + String(Math.random())
      
    return ( 
        <Fragment>
            <div className='products-wrapper'>

                <div className='filter-sort'>

                    <p>{products.length} Produtos Encontrados</p>
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
                            { products.map(product => <Product product={product} key={removeIdDuplicate(product.id)} />) }

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
                    
                            {   
                                tipo !== undefined ?
                                <Breadcrumb className='path-prod-wrapper'>

                                        <Breadcrumb.Item className='path-prod'> {categoria} </Breadcrumb.Item>
                                        <Breadcrumb.Item className='path-prod'> {subcategoria === 'Acessorio' ? (subcategoria.replace('o', 'ó') + 's') : subcategoria.replace('a', 'á')} </Breadcrumb.Item>
                                        <Breadcrumb.Item className='path-prod'> {tipo + 's'} </Breadcrumb.Item>
                                </Breadcrumb>
                                :
                                <Breadcrumb className='path-prod-wrapper'>

                                        <Breadcrumb.Item className='path-prod'> {categoria} </Breadcrumb.Item>
                                        <Breadcrumb.Item className='path-prod'> {subcategoria} </Breadcrumb.Item>
                                </Breadcrumb>
                            }

                        <Filter />
                </div>

            </div>
        </Fragment>
    )
}

export default ProductCardList
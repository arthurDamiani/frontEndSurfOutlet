import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllProducts } from '../../selectors/products'
import { getProducts } from '../../actions/products'

import api from '../../services/api'
 
import ProductDetails from '../Products/ProductDetails'

const DetailsProduct = () => {
    const dispatch = useDispatch()

    const paramId = useParams()

    const products = useSelector(getAllProducts)

    useMemo(() => {
        const fetchProducts = async () => {

            const res = await api.get('/produto/')
            const prod = (res.data.retorno.produtos).map(el => el.produto)
            
            dispatch(getProducts(prod))            
        }

        fetchProducts()
    }, [dispatch])

    const productDetails = products.filter(el => el.codigo === paramId.codigo)
    console.log(productDetails[0])
 
    return (
        <div>
            <ProductDetails product={productDetails[0]} />  
        </div>
    )
}

export default DetailsProduct
import React from 'react'
 
import products  from '../../data/products'
import { useParams } from 'react-router-dom'
import ProductDetails from '../Products/ProductDetails'

 
const DetailsProduct = ( ) => {
    const {id} = useParams()
    const index = id - 1

    const productFilter = products[index]

    //REFACTORING
  
    return (
         <>
            <ProductDetails product={productFilter} key={index}/>  
         </>
    )
}

export default DetailsProduct
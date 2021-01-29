import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllProducts } from '../../selectors/products'
 
import ProductDetails from '../Products/ProductDetails'

 
const DetailsProduct = () => {

    const param = useParams()

    const prodID = (param.id - 1) 
    
    const products = useSelector(getAllProducts)

    const productID = products[prodID]


    console.log(products)
    
    return (
        <div>
            <ProductDetails product={productID} key={prodID}/>  
        </div>
    )
}

export default DetailsProduct
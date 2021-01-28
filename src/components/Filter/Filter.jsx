import React, {Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCheckboxFilterBrand, removeCheckboxFilterBrand, setCheckboxFilterCategory, removeCheckboxFilterCategory } from '../../actions/filters'
import { getAllProducts, getAllProductBrands, getAllProductCategory } from '../../selectors/products'

function Filter() {
    const dispatch = useDispatch()

    const products = useSelector(getAllProducts)

    const productBrands = useSelector(getAllProductBrands)

    const productCategory = useSelector(getAllProductCategory)


    const handleFilterBrand = (e) => {
        const value = e.target.value

        if (e.target.checked) {
        dispatch(setCheckboxFilterBrand(value))
        } else {
        dispatch(removeCheckboxFilterBrand(value))
        }
    }

    const handleFilterCategory = (e) => {
        const value = e.target.value

        if (e.target.checked) {
        dispatch(setCheckboxFilterCategory(value))
        } else {
        dispatch(removeCheckboxFilterCategory(value))
        }
    }



    const brandsItemsCount = {}
    products.forEach(product => brandsItemsCount[product.brand] = brandsItemsCount[product.brand] + 1 || 1)

    const categoryItemsCount = {}
    products.forEach(product => categoryItemsCount[product.category] = categoryItemsCount[product.category] + 1 || 1)
    

    return (
        <Fragment>
            {
                productBrands.map((brand, i) => {
                return (
                    <div key={i}>
                    <input 
                        type="checkbox" 
                        name={brand} 
                        id={brand} 
                        value={brand} 
                        onChange={(e) => handleFilterBrand(e)} 
                    />
                    
                    <label htmlFor={brand}> {brand} ({brandsItemsCount[brand]}) </label>
                    </div>
                )
                })
            }   

            {
                productCategory.map((category, i) => {
                return (
                    <div key={i}>
                    <input 
                        type="checkbox" 
                        name={category} 
                        id={category} 
                        value={category} 
                        onChange={(e) => handleFilterCategory(e)} 
                    />
                    
                    <label htmlFor={category}> {category} ({categoryItemsCount[category]}) </label>
                    </div>
                )
                })
            } 
        </Fragment>
    )
}

export default Filter
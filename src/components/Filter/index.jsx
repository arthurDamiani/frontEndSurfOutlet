import React, {useState} from 'react'
import {Button, Checkbox, FormGroup, FormControlLabel, TextField, InputAdornment} from '@material-ui/core'
import {ExpandMore, ExpandLess, FilterList, Close} from '@material-ui/icons'

import MultiSelect from "react-multi-select-component";

import './filter.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getAllProductBrands, getAllProductCategory } from '../../selectors/products'
import { setFilterBrand, removeFilterBrand, setFilterCategory, removeFilterCategory } from '../../actions/filters'
import useWindowDimensions from '../../hooks/useWindowDimensions'

function Filter() {

    const dispatch = useDispatch()

    const products = useSelector(getAllProducts)

    const productBrands = useSelector(getAllProductBrands)
    const productCategory = useSelector(getAllProductCategory)

    const brandsItemsCount = {}
    products.forEach(product => brandsItemsCount[product.brand] = brandsItemsCount[product.brand] + 1 || 1)

    const categoryItemsCount = {}
    products.forEach(product => categoryItemsCount[product.category] = categoryItemsCount[product.category] + 1 || 1)

    const [brands, setBrands] = useState(false)
    const [category, setCategory] = useState(false)

    const handleChangeBrand = e => {
        const value = e.target.value
        
        if (e.target.checked) {
            dispatch(setFilterBrand(value))
        } else {
            dispatch(removeFilterBrand(value))
        }
    }

    const handleChangeCategory = e => {
        const value = e.target.value
        
        if (e.target.checked) {
            dispatch(setFilterCategory(value))
        } else {
            dispatch(removeFilterCategory(value))
        }
    }

    const [filter, setFilter] = useState(false)
    const showFilter = () => setFilter(!filter)
    const { width } = useWindowDimensions()
    const showFilterBars = test() 
    function test() {
        if(width <= 700 && !filter) {
            return false
        } else {
            return true
        }
    }

    return (
        <div className='filter active'>
            {/* <div className='filter-option'>
                <MultiSelect
                    options={brandOptions}
                    value={selected}
                    onChange={handleChangeBrand}
                    labelledBy={"Select"}
                />
            </div> */}

            {showFilterBars ? 
            <>
                <div onClick={showFilter} className='close-filter'>
                    <Close color='primary' />
                </div>

                <div className="filter-option">
                    <div className='filter-option-top' onClick={() => setBrands(!brands)}>
                        <Button  color='primary' size='large' fullWidth>Marcas</Button>
                        {brands ? <ExpandLess color='primary' /> : <ExpandMore color='primary' />}
                    </div>
                    {brands ?
                    <FormGroup>
                        {
                            productBrands.map((brand, i) => {
                                return (
                                    <FormControlLabel
                                        key={i}
                                        control={
                                            <Checkbox 
                                                color='primary' 
                                                onChange={handleChangeBrand} 
                                                name={brand} 
                                                value={brand} 
                                            />
                                        }
                                        label={brand}
                                    />
                                )
                            })
                        }
                    </FormGroup>: ''}
                </div>
                <div className="filter-option">
                    <div className='filter-option-top' onClick={() => setCategory(!category)}>
                        <Button  color='primary' size='large' fullWidth>Categorias</Button>
                        {category ? <ExpandLess color='primary' /> : <ExpandMore color='primary' />}
                    </div>
                    {category ?
                    <FormGroup>
                        {
                            productCategory.map((categ, i) => {
                                return (
                                    <FormControlLabel
                                        key={i}
                                        control={
                                            <Checkbox 
                                                color='primary' 
                                                onChange={handleChangeCategory} 
                                                value={categ}
                                                name={categ}
                                            />
                                        }
                                        label={categ}
                                    />
                                )
                            })
                        }
                    </FormGroup> : ''}
                </div> 
            </>: <div className='open-filter' onClick={showFilter}><FilterList color='primary' /></div>}
        </div>
    )
}

export default Filter

import React, {useState} from 'react'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import {Button, Checkbox, FormGroup, FormControlLabel, TextField, InputAdornment} from '@material-ui/core'
import {ExpandMore, ExpandLess, AttachMoney} from '@material-ui/icons'

import './filter.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getAllProductBrands, getAllProductCategory } from '../../selectors/products'
import { setFilterBrand, removeFilterBrand, setFilterCategory, removeFilterCategory } from '../../actions/filters'

function Filter() {
    // const dispatch = useDispatch()

    const animatedComponents = makeAnimated()

    const department = 
    [
        {label: 'VESTUÁRIO', value: 'VESTUÁRIO'},
        {label: 'SURF', value: 'SURF'},
        {label: 'CALÇADOS', value: 'CALÇADOS'},
        {label: 'ÓCULOS', value: 'ÓCULOS'},
        {label: 'RELÓGIOS', value: 'RELÓGIOS'},
        {label: 'ACESSÓRIOS', value: 'ACESSÓRIOS'},
    ]

    const genre = 
    [
        {label: 'MASCULINO', value: 'masculino'},
        {label: 'FEMININO', value: 'feminino'},
        {label: 'JUVENIL', value: 'juvenil'}
    ]

    const price = 
    [
        {label: 'Até R$ 99,00', value: 'até R$ 99,00'},
        {label: 'R$ 100,00 a R$ 199,00', value: 'R$ 100,00 até R$ 199,00'},
        {label: 'R$ 200,00 a R$ 299,00', value: 'R$ 200,00 a R$ 299,00'},
        {label: 'R$ 300,00 a R$ 399,00', value: 'R$ 300,00 a R$ 399,00'},
        {label: 'R$ 400,00 a R$ 499,00', value: 'R$ 400,00 a R$ 499,00'},
        {label: 'Acima de R$ 500,00', value: 'Acima de R$ 500,00'},
    ]
    
    const brands = useSelector(getAllProductBrands)
    
    const category = useSelector(getAllProductCategory)


    // const handleChangeBrand = e => {
    //     const value = e.target.value
        
    //     if (e.target.checked) {
    //         dispatch(setFilterBrand(value))
    //     } else {
    //         dispatch(removeFilterBrand(value))
    //     }
    // }

    // const handleChangeCategory = e => {
    //     const value = e.target.value
        
    //     if (e.target.checked) {
    //         dispatch(setFilterCategory(value))
    //     } else {
    //         dispatch(removeFilterCategory(value))
    //     }
    // }

    return (
        <div className='filter'>

            <h3>FILTROS</h3>

            <div className='filter-option'>
                 <Select
                    placeholder='DEPARTAMENTO'
                    closeMenuOnSelect={false}
                    className="basic-multi-select"
                    name="genero"
                    components={animatedComponents}
                    isMulti={true}
                    options={department}
                    classNamePrefix="select"
                />
            </div>
            
            <div className='filter-option'>
                <Select
                    placeholder='GÊNERO'
                    closeMenuOnSelect={false}
                    className="basic-multi-select"
                    name="marcas"
                    components={animatedComponents}
                    isMulti={true}
                    options={genre}
                    classNamePrefix="select"
                />
            </div>


            <div className='filter-option'>
                <Select
                    placeholder='TAMANHO'
                    closeMenuOnSelect={false}
                    className="basic-multi-select"
                    name="marcas"
                    components={animatedComponents}
                    isMulti={true}
                    options={brands.map(el =>  ({ label: el, value: el })  )}
                    classNamePrefix="select"
                />
            </div>

            <div className='filter-option'>
                <Select
                    placeholder='COR'
                    closeMenuOnSelect={false}
                    className="basic-multi-select"
                    name="marcas"
                    components={animatedComponents}
                    isMulti={true}
                    options={brands.map(el =>  ({ label: el, value: el })  )}
                    classNamePrefix="select"
                />
            </div>

            <div className='filter-option'>
                <Select
                    placeholder='MARCA'
                    closeMenuOnSelect={false}
                    className="basic-multi-select"
                    name="marcas"
                    components={animatedComponents}
                    isMulti={true}
                    options={brands.map(el =>  ({ label: el, value: el })  )}
                    classNamePrefix="select"
                />
            </div>

            <div className='filter-option'>
                <Select
                    placeholder='PREÇO'
                    closeMenuOnSelect={false}
                    className="basic-multi-select"
                    name="marcas"
                    components={animatedComponents}
                    isMulti={false}
                    options={price}
                    classNamePrefix="select"
                />
            </div>



        </div>
    )
}

export default Filter

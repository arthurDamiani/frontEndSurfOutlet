import React, {useCallback, useState} from 'react'
import './filter.css'

import { useParams} from 'react-router'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getAllProductColor, getAllProductSize, getAllProductBrands } from '../../selectors/products'
import api from '../../services/api'
import { getProducts } from '../../actions/products'


function Filter() {
    const dispatch = useDispatch()

    const categoria = useParams().categoria
    const subcategoria = useParams().subcategoria
    const tipo = useParams().tipo

    const products = useSelector(getAllProducts) 

    const [loading, setLoading] = useState(false)

    const [selectedSize, setSelectedSize] = useState([])
    const [selectedColor, setSelectedColor] = useState([])
    const [selectedBrand, setSelectedBrand] = useState([])

    const filtersSize = selectedSize.map(el => el.value)
    const filtersColor = selectedColor.map(el => el.value)
    const filtersBrand = selectedBrand.map(el => el.value)
   
    const addFilterApi = useCallback( async () => {
        products.length > 0 ? setLoading(false) : setLoading(true)

        if(subcategoria !== undefined && tipo !== undefined) {
            const res = await api.get(`/produtos/categoria?categoria=${categoria}&subcategoria=${subcategoria}&tipo=${tipo}&tamanho=${filtersSize}&cor=${filtersColor}&marca=${filtersBrand}`)
            const prod = (res.data).map(el => el.produto)
            dispatch(getProducts(prod))
        } else if(subcategoria !== undefined && tipo === undefined) {
            const res = await api.get(`/produtos/categoria?categoria=${categoria}&subcategoria=${subcategoria}&tamanho=${filtersSize}&cor=${filtersColor}&marca=${filtersBrand}`)
            const prod = (res.data).map(el => el.produto)
            dispatch(getProducts(prod))
        } else if(subcategoria === undefined && tipo === undefined && categoria !== undefined) {
            const res = await api.get(`/produtos/categoria?categoria=${categoria}&tamanho=${filtersSize}&cor=${filtersColor}&marca=${filtersBrand}`)
            const prod = (res.data).map(el => el.produto)
            dispatch(getProducts(prod))
        } else { //CONDIÇÃO APENAS PARA TESTES
            const res = await api.get(`/produtos/categoria?tamanho=${filtersSize}&cor=${filtersColor}&marca=${filtersBrand}`)
            const prod = (res.data).map(el => el.produto)
            dispatch(getProducts(prod)) 
        }  
            
    }, [dispatch, products.length, filtersColor, filtersSize, filtersBrand, categoria, subcategoria, tipo])

    const animatedComponents = makeAnimated()

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

    const colors = useSelector(getAllProductColor)
    const colorsNoRepeat = [...new Set(colors)]

    const sizes = useSelector(getAllProductSize)
    const sizesNoRepeat = [...new Set(sizes)].filter(Boolean)

    return (
        <div className='filter'>

            <h3>FILTROS</h3>

            <div className='filter-option'>
                <Select
                    placeholder='TAMANHO'
                    closeMenuOnSelect={false}
                    className="basic-multi-select"
                    name="marcas"
                    components={animatedComponents}
                    isMulti={true}
                    options={sizesNoRepeat.map(el => ({ label: el, value: el }) )}
                    classNamePrefix="select"
                    onChange={setSelectedSize}
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
                    options={colorsNoRepeat.map(el => ({ label: el, value: el }) )}
                    classNamePrefix="select"
                    onChange={setSelectedColor}
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
                    options={brands.map(el => ({ label: el, value: el }) )}
                    classNamePrefix="select"
                    onChange={setSelectedBrand}
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
                    // onChange={setSelectedOption}
                />
            </div>

            <button 
                className='btn-filter' 
                onClick={addFilterApi}
            > 
                FILTRAR 
            </button>

        </div>
    )
}

export default Filter

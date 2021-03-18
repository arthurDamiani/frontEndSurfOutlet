import React, {useCallback, useLayoutEffect, useMemo, useState} from 'react'
import './filter.css'

import { useParams, useHistory, useLocation, useRouteMatch } from 'react-router'
import chroma from 'chroma-js'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getAllProductBrands } from '../../selectors/products'
import api from '../../services/api'
import { getProducts, clearProducts } from '../../actions/products'


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
    const filtersBrand = selectedColor.map(el => el.value)
   
    const addFilterApi = useCallback( async () => {
        products.length > 0 ? setLoading(false) : setLoading(true)

        if(subcategoria !== undefined && tipo !== undefined) {
            const res = await api.get(`/produtos/categoria?categoria=${categoria}&subcategoria=${subcategoria}&tipo=${tipo}&tamanho=${filtersSize}&cor=${filtersColor}`)
            const prod = (res.data).map(el => el.produto)
            dispatch(getProducts(prod))
        } else if(subcategoria !== undefined && tipo === undefined) {
            const res = await api.get(`/produtos/categoria?categoria=${categoria}&subcategoria=${subcategoria}&tamanho=${filtersSize}&cor=${filtersColor}`)
            const prod = (res.data).map(el => el.produto)
            dispatch(getProducts(prod))
        } else if(subcategoria === undefined && tipo === undefined && categoria !== undefined) {
            const res = await api.get(`/produtos/categoria?categoria=${categoria}&tamanho=${filtersSize}&cor=${filtersColor}`)
            const prod = (res.data).map(el => el.produto)
            dispatch(getProducts(prod))
        } else { //CONDIÇÃO APENAS PARA TESTES
            const res = await api.get(`/produtos/tamanho=${filtersSize}&cor=${filtersColor}`)
            const prod = (res.data).map(el => el.produto)
            dispatch(getProducts(prod)) 
        }  
            
    }, [dispatch, filtersColor, filtersSize, products.length, categoria, subcategoria, tipo])

    const animatedComponents = makeAnimated()

    const size = 
    [
        {label: '38', value: '38'},
        {label: '39', value: '39'},
        {label: '40', value: '40'},
        {label: '41', value: '41'},
        {label: '42', value: '42'},
        {label: '43', value: '43'},
        {label: '44', value: '44'},
        {label: 'PP', value: 'PP'},
        {label: 'P', value: 'P'},
        {label: 'M', value: 'M'},
        {label: 'G', value: 'G'},
        {label: 'GG', value: 'GG'},
    ]

    const colors = [
        { value: 'Azul', label: 'Azul', color: '#0052CC' },
        { value: 'Preto', label: 'Preto', color: '#000' },
        { value: 'Roxo', label: 'Roxo', color: '#5243AA' },
        { value: 'Vermelho', label: 'Vermelho', color: '#ff0000' },
        { value: 'Laranja', label: 'Laranja', color: '#FF8B00' },
        { value: 'Amarelo', label: 'Amarelo', color: '#FFC400' },
        { value: 'Verde', label: 'Verde', color: '#36B37E' },
        { value: 'Branco', label: 'Branco', color: '#c2c2c2'},
    ]

    const dot = (color = '#ccc') => ({
        alignItems: 'center',
        display: 'flex',
      
        ':before': {
          backgroundColor: color,
          borderRadius: 10,
          content: '" "',
          display: 'block',
          marginRight: 8,
          height: 10,
          width: 10,
        },
    })

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', width: '200px' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          const color = chroma(data.color);
          return {
            ...styles,
            backgroundColor: isDisabled
              ? null
              : isSelected
              ? data.color
              : isFocused
              ? color.alpha(0.1).css()
              : null,
            color: isDisabled
              ? '#ccc'
              : isSelected
              ? chroma.contrast(color, 'white') > 2
                ? 'white'
                : 'black'
              : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
      
            ':active': {
              ...styles[':active'],
              backgroundColor:
                !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
          };
        },
        input: styles => ({ ...styles, ...dot() }),
        placeholder: styles => ({ ...styles, ...dot() }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    }

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
                    options={size}
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
                    styles={colourStyles}
                    options={colors}
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
                    options={brands.map(el =>  ({ label: el, value: el })  )}
                    classNamePrefix="select"
                    // onChange={setSelectedOption}
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

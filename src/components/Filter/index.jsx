import React, {useMemo, useState} from 'react'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import './filter.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getAllProductBrands } from '../../selectors/products'
import api from '../../services/api'
import { getProducts } from '../../actions/products'


function Filter() {
    const [selectedOption, setSelectedOption] = useState([])

    const dispatch = useDispatch()
    const products = useSelector(getAllProducts)

    const filter = {...selectedOption.map(el => el.value)}
    console.log(filter)

    // useMemo(() => {  
    //     const fetchProducts = async () => {
    //       const res = await api.get(`/produtos/categoria?marca=${filter[0]}`)
    //       const prodFilter = (res.data).map(el => el.produto)
    //       console.log(prodFilter)
  
    //       dispatch(getProducts(prodFilter)) 
  
    //   }
    //   fetchProducts()
    // }, [dispatch, filter])

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
                    options={brands.map(el =>  ({ label: el, value: el })  )}
                    classNamePrefix="select"
                    onChange={setSelectedOption}
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
                    onChange={setSelectedOption}
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
                    onChange={setSelectedOption}
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
                    onChange={setSelectedOption}
                />
            </div>



        </div>
    )
}

export default Filter

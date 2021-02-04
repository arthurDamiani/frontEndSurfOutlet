import React, {useState} from 'react'
import {Button, Checkbox, FormGroup, FormControlLabel, TextField, InputAdornment} from '@material-ui/core'
import {ExpandMore, ExpandLess, AttachMoney} from '@material-ui/icons'

import './filter.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, getAllProductBrands, getAllProductCategory } from '../../selectors/products'
import { setFilterBrand, removeFilterBrand, setFilterCategory, removeFilterCategory } from '../../actions/filters'

function Filter() {

    const dispatch = useDispatch()

    const products = useSelector(getAllProducts)

    const productBrands = useSelector(getAllProductBrands)
    const productCategory = useSelector(getAllProductCategory)


    const brandsItemsCount = {}
    products.forEach(product => brandsItemsCount[product.brand] = brandsItemsCount[product.brand] + 1 || 1)

    const categoryItemsCount = {}
    products.forEach(product => categoryItemsCount[product.category] = categoryItemsCount[product.category] + 1 || 1)

    const [size, setSize] = useState(false)
    const [color, setColor] = useState(false)
    const [brands, setBrands] = useState(false)
    const [category, setCategory] = useState(false)
    const [price, setPrice] = useState(false)

    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    const [checked, setChecked] = useState(false)

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

    return (
        <div className='filter'>
            <div className='filter-option'>
                <div className='filter-option-top' onClick={() => setSize(!size)}>
                    <Button  color='primary' size='large' fullWidth>Tamanho</Button>
                    {size ? <ExpandLess color='primary' /> : <ExpandMore color='primary' />}
                </div>
                {size ? 
                <div className='sizes-container'>
                    <div className='size-line'>
                        <button className='size'>P</button>
                        <button className='size'>M</button>
                        <button className='size'>G</button>
                        <button className='size'>GG</button>
                    </div>
                    <div className='size-line'>
                        <button className='size'>36</button>
                        <button className='size'>37</button>
                        <button className='size'>38</button>
                        <button className='size'>39</button>
                    </div>
                    <div className='size-line'>
                        <button className='size'>40</button>
                        <button className='size'>42</button>
                        <button className='size'>43</button>
                        <button className='size'>44</button>
                    </div> 
                </div> : ''}
            </div>
            <div className="filter-option">
                <div className='filter-option-top' onClick={() => setColor(!color)}>
                    <Button  color='primary' size='large' fullWidth>Cor</Button>
                    {color ? <ExpandLess color='primary' /> : <ExpandMore color='primary' />}
                </div>
                {color ?
                <FormGroup>
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.white} name='white' />}
                        label='Branco'
                    />
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.black} name='black' />}
                        label='Preto'
                    />
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.blue} name='blue' />}
                        label='Azul'
                    />
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.orange} name='orange' />}
                        label='Laranja'
                    />
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.red} name='red' />}
                        label='Vermelho'
                    />
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.brown} name='brown' />}
                        label='Marrom'
                    />
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.pink} name='pink' />}
                        label='Rosa'
                    />
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.purple} name='purple' />}
                        label='Roxo'
                    />
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.grey} name='grey' />}
                        label='Cinza'
                    />
                    <FormControlLabel
                        // control={<Checkbox color='primary' onChange={handleChange} checked={checked.green} name='green' />}
                        label='Verde'
                    />
                </FormGroup> : ''}
            </div>
            <div className="filter-option">
                <div className='filter-option-top' onClick={() => setBrands(!brands)}>
                    <Button  color='primary' size='large' fullWidth>Marcas</Button>
                </div>
                {brands ?
                <FormGroup>
                    {
                        productBrands.map((brand, i) => {
                            return (
                                <FormControlLabel
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
            <div className="filter-option">
                <div className='filter-option-top' onClick={() => setPrice(!price)} >
                    <Button o  color='primary' size='large' fullWidth>Preço</Button>
                    {price ? <ExpandLess color='primary' /> : <ExpandMore color='primary' />}
                </div>
                {price ? 
                <div className='filter-price'>
                    <div className='price-input-container'>
                        <div className='price-input'>
                            <TextField
                                value={minPrice}
                                onChange={(e) => {setMinPrice(e.target.value)}}
                                InputProps={{endAdornment: (<InputAdornment><AttachMoney /></InputAdornment>)}}
                                id='minPrice' 
                                label='min' 
                                type='number' 
                                variant='filled'
                                margin='normal'
                                size='small'
                                required 
                                fullWidth
                            />
                        </div>
                        <div className='price-input'>
                            <TextField
                                value={maxPrice}
                                onChange={(e) => {setMaxPrice(e.target.value)}}
                                InputProps={{endAdornment: (<InputAdornment><AttachMoney /></InputAdornment>)}}
                                id='maxPrice' 
                                label='max' 
                                type='number' 
                                variant='filled'
                                margin='normal'
                                size='small'
                                required 
                                fullWidth
                            />
                        </div>
                    </div>
                </div>
                : ''}
            </div>
        </div>
    )
}

export default Filter

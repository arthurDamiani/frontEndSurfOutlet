import React, {useState} from 'react'
import {Button, Checkbox, FormGroup, FormControlLabel, TextField, InputAdornment} from '@material-ui/core'
import {ExpandMore, ExpandLess, AttachMoney} from '@material-ui/icons'

import './filter.css'

function Filter() {
    const [size, setSize] = useState(false)
    const [color, setColor] = useState(false)
    const [brands, setBrands] = useState(false)
    const [category, setCategory] = useState(false)
    const [price, setPrice] = useState(false)

    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    const [checked, setChecked] = useState({
        white: false,
        black: false,
        blue: false,
        orange: false,
        red: false,
        green: false,
        purple: false,
        pink: false,
        brown: false,
        grey: false,
        billabong: false,
        quiksilver: false,
        mormaii: false,
        nike: false,
        vibe: false,
        freestyle: false,
        hb: false,
        pants: false,
        tankTop: false,
        tshirt: false,
        shorts: false,
        hat: false,
        trunks: false,
        bikini: false
    })

    const handleChange = (event) => {
        setChecked({...checked, [event.target.name] : event.target.checked})
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
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.white} name='white' />}
                        label='Branco'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.black} name='black' />}
                        label='Preto'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.blue} name='blue' />}
                        label='Azul'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.orange} name='orange' />}
                        label='Laranja'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.red} name='red' />}
                        label='Vermelho'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.brown} name='brown' />}
                        label='Marrom'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.pink} name='pink' />}
                        label='Rosa'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.purple} name='purple' />}
                        label='Roxo'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.grey} name='grey' />}
                        label='Cinza'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.green} name='green' />}
                        label='Verde'
                    />
                </FormGroup> : ''}
            </div>
            <div className="filter-option">
                <div className='filter-option-top' onClick={() => setBrands(!brands)}>
                    <Button  color='primary' size='large' fullWidth>Marcas</Button>
                    {brands ? <ExpandLess color='primary' /> : <ExpandMore color='primary' />}
                </div>
                {brands ?
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.billabong} name='billabong' />}
                        label='Billabong'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.quiksilver} name='quiksilver' />}
                        label='Quiksilver'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.mormaii} name='mormaii' />}
                        label='Mormaii'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.nike} name='nike' />}
                        label='Nike'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.vibe} name='vibe' />}
                        label='Vibe'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.freestyle} name='freestyle' />}
                        label='Freestyle'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.hb} name='hb' />}
                        label='HB'
                    />
                </FormGroup>: ''}
            </div>
            <div className="filter-option">
                <div className='filter-option-top' onClick={() => setCategory(!category)}>
                    <Button  color='primary' size='large' fullWidth>Categorias</Button>
                    {category ? <ExpandLess color='primary' /> : <ExpandMore color='primary' />}
                </div>
                {category ?
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.pants} name='pants' />}
                        label='Calças'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.tankTop} name='tankTop' />}
                        label='Regatas'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.tshirt} name='tshirt' />}
                        label='Camisetas'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.shorts} name='shorts' />}
                        label='Bermudas'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.hat} name='hat' />}
                        label='Bonés'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.trunks} name='trunks' />}
                        label='Sungas'
                    />
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={handleChange} checked={checked.bikini} name='bikini' />}
                        label='Biquínis'
                    />
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
                    <div className='price-button-container'>
                        <Button type='submit' color='primary' variant='contained' fullWidth>Filtrar</Button>
                    </div>
                </div>
                : ''}
            </div>
        </div>
    )
}

export default Filter

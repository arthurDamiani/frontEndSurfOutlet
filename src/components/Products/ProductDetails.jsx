import React, {useState, Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../actions/products'
import { ReactComponent as Cart } from '../../assets/shopping-cart-solid.svg'

import './productDetails.css'
import NumberFormat from 'react-number-format'

import Select from 'react-select'

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch() 

    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('')

    const onSelectedSizeChange = value => setSelectedSize(...value.label)
    const onSelectedColorChange = value => setSelectedColor(...value.label)

    const addToCartFn = () => selectedSize === '' || selectedColor === '' ? window.alert('Selecione um tamanho e uma cor antes de adicionar ao carrinho') : (dispatch(addToCart({...product, size: selectedSize, color: selectedColor})))

    // COLORS
    const cores = (product.variacoes)
        .map(el => el.variacao)
        .map(el => el.nome)
        .map(el => el.substr(4))
        .map(el => el.split(';'))
        .map(el => el.slice(0, 1))
    
    let colors = cores.map((el, i) => {
        return {label: el}
    })

    // SIZES
    const tamanhos = (product.variacoes)
        .map(el => el.variacao)
        .map(el => el.codigo)
        .map(el => el.split('-'))
        .map(el => el.slice(1, 2))
        
    let sizes = tamanhos.map((el, i) => {
        return {label: el}
    })
  
    const imgThumb = [product.imageThumbnail, product.imageThumbnail, product.imageThumbnail, product.imageThumbnail]
    const [images, setImages] = useState(product.imageThumbnail)

    return (
        <Fragment>
            <div className='details-wrapper'>
                <div className='gallery-img'>
                        <img className='big-img' src={images} alt='img' />
                    <div className='thumb'>
                        <div onClick={() => setImages(imgThumb[0])}>
                            <img className={images === imgThumb[0] ? 'active' : ''} src={imgThumb[0]} alt='img'/>
                        </div>
                        <div onClick={() => setImages(imgThumb[1])}>
                            <img className={images === imgThumb[1] ? 'active' : ''} src={imgThumb[1]} alt='img'/>
                        </div>
                        <div onClick={() => setImages(imgThumb[2])}>
                            <img className={images === imgThumb[2] ? 'active' : ''} src={imgThumb[2]} alt='img'/>
                        </div>
                        <div onClick={() => setImages(imgThumb[3])}>
                            <img className={images === imgThumb[3] ? 'active' : ''} src={imgThumb[3]} alt='img'/>
                        </div>
                    </div>
                </div>
                <div className='details-content'>
                    <h3 className='title-product'>{product.descricao}</h3>
                    <span className='price-product'><NumberFormat value={(product.preco)} displayType={'text'} decimalScale={2} thousandSeparator={true} prefix={'R$'} /></span>

                    <div className='btn-buy'>
                            <button 
                                 onClick={() => addToCartFn()}
                            >
                                ADICIONAR AO {<Cart height='20' width='20' color='#fff' />}
                            </button>
                    </div>
                    <div className='size-product'>
                        <Select
                            className='select-size'
                            placeholder="Selecione um tamanho"
                            onChange={onSelectedSizeChange}
                            options={sizes}
                            required={true}
                        />
                    </div>
                    <div className='colors-product'>
                        <Select
                            className='select-size'
                            placeholder="Selecione uma cor"
                            onChange={onSelectedColorChange}
                            options={colors}
                            required={true}
                        />

                        <span className='composition-product'>
                        <p>COMPOSIÇÃO: 53% Poliéster / 47% Algodão</p>  
                        </span>
                    </div>
                    <div className='info-product'>
                        <h3>Descrição</h3>
                        <p>{product.descricaoCurta}</p>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}

export default ProductDetails
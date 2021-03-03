import React, {useState, Fragment} from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../actions/products'
import { ReactComponent as Cart } from '../../assets/shopping-cart-solid.svg'

import './productDetails.css'
import products  from '../../data/products'
import NumberFormat from 'react-number-format'

import Select from 'react-select'

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch()

    // SIZES DROPDOWN 
    let sizes = []
        sizes.push({label: 'P'})    
        sizes.push({label: 'M'})    
        sizes.push({label: 'G'})    
        sizes.push({label: 'GG'})    

    const [selectedSize, setSelectedSize] = useState('')

    const onSelectedSizeChange = newValue => setSelectedSize(newValue.label)

    product.codigo = selectedSize

    const imgThumb = [products[0].imageThumbnail, products[1].imageThumbnail, products[2].imageThumbnail, products[3].imageThumbnail]
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
                                 onClick={() => product.codigo !== '' ? dispatch(addToCart({...product})) : window.alert('Selecione um tamanho antes de adicionar ao carrinho')}
                            >
                                ADICIONAR AO {<Cart height='20' width='20' color='#fff' />}
                            </button>
                    </div>
                    <div className='size-product'>
                        <Select
                            className='select-size'
                            placeholder="Selecione o tamanho"
                            onChange={onSelectedSizeChange}
                            options={sizes}
                            required={true}
                        />
                    </div>
                    <div className='colors-product'>
                        <h3>COR</h3>
                        <div>
                            <button className='rosa'></button>
                            <button className='vermelho'></button>
                            <button className='branco'></button>
                            <button className='azul'></button>
                        </div>

                        <span className='composition-product'>
                        <p>COMPOSIÇÃO: 53% Poliéster / 47% Algodão</p>  
                        </span>
                    </div>
                    <div className='info-product'>
                        <h3>Descrição</h3>
                        <p>Blusa de moletom, com felpa, bolso frente canguru sobreposto, 
                        forro no capuz em malha colorida, cordão como regulagem,
                        estampa frente e costas e etiquetas personalizadas.</p>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}

export default ProductDetails
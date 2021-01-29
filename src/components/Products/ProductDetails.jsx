import React, {useState, Fragment} from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../actions/products'

import './productDetails.css'
import products  from '../../data/products'
import ProductsSlider from '../../components/ProductsSlider'
import Select from 'react-select'

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch()

    const [selectedSize, setSelectedSize] = useState('');

    // SIZES DROPDOWN ITEM
    let sizes = []
        sizes.push({label: product.size[0]})    
        sizes.push({label: product.size[1]})    
    

    const onSelectedSizeChange = (newValue) => setSelectedSize(newValue.value)
    
    product.quantity = 1

    const imgThumb = [products[0].image, products[1].image, products[2].image, products[3].image]
    const [images, setImages] = useState(product.image)

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
                    <h3 className='title-product'>{product.title}</h3>
                    <span className='price-product'>R$ {product.price}</span>
                    <div className='btn-buy'>
                            <button onClick={() => dispatch(addToCart(product.id))}>COMPRAR AGORA</button>
                            <button onClick={() => dispatch(addToCart(product.id))}>ADICIONAR AO CARRINHO</button>
                    </div>
                    <div className='size-product'>
                        <Select
                            className='select-size'
                            placeholder="Selecione o tamanho"
                            onChange={onSelectedSizeChange}
                            options={sizes}
                           
                            
                        />
                    </div>
                    <div className='colors-product'>
                        <h3>COR</h3>
                        <button className='rosa'></button>
                        <button className='vermelho'></button>
                        <button className='branco'></button>
                        <button className='azul'></button>

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
                <div className="suggestion">
                    <h3>TALVEZ VOCÊ GOSTE TAMBÉM</h3>
                    <ProductsSlider />
                </div>
            </div>
        </Fragment>
        
    )
}

export default ProductDetails
import React, {useState} from 'react'
import './detailsProduct.css'
import ProductsSlider from '../../components/ProductsSlider'
import productCard  from '../ProductCardList/productCard'
import { useStateValue } from '../../contexts/StateProvider'
import Product from '../Product'


const DetailsProduct = () => {
    const [product] = useState(productCard[0])
     
    const imgThumb = [productCard[0].image, productCard[1].image, productCard[2].image, productCard[3].image]
    const [images, setImages] = useState(imgThumb[0])
    const [size, setSize] = useState(product.size[0])

    const [{ cart }, dispatch] = useStateValue()

    const addToCart = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                size: size
            },
        })
    }
  
    return (
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
                <span className='price-product'>R${product.price}</span>
                <div className='btn-buy'>
                        <button onClick={addToCart}>COMPRAR AGORA</button>
                        <button onClick={addToCart}>ADICIONAR AO CARRINHO</button>
                </div>
                <div className='size-product'>
                    <h3>TAMANHO</h3>
                    <button onClick={() => setSize(product.size[0])}>{product.size[0]}</button>
                    <button onClick={() => setSize(product.size[1])}>{product.size[1]}</button>
                    <button onClick={() => setSize(product.size[2])}>{product.size[2]}</button>
                    <button onClick={() => setSize(product.size[3])}>{product.size[3]}</button>
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
    )
}

export default DetailsProduct
import React, {useState} from 'react'
import './detailsProduct.css'
import roupa from '../../assets/roupa.png'
import roupa2 from '../../assets/roupa2.png'
import roupa3 from '../../assets/roupa3.png'
import roupa4 from '../../assets/roupa4.png'
import ProductsSlider from '../../components/ProductsSlider'
import ShoppingCart from '../ShoppingCart'
import productCard  from '../ProductCardList/productCard'


const DetailsProduct = () => {
    const imgThumb = [roupa, roupa2, roupa3, roupa4]
    const [images, setImages] = useState(imgThumb[0])

    const page_prod = 'products'
    const page_cart = 'cart'

    const [cart, setCart] = useState([])
    const [product] = useState(...productCard)
    const [page, setPage] = useState(page_prod)

    const addToCart = product => setCart([...cart, {...product}])

    const removeFromCart = productToRemove => setCart(cart.filter(product => product !== productToRemove))

    const navigateTo = nextPage => setPage(nextPage)

    const renderDetailsProduct = [
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
                <h3 className='title-product'>JAQUETA DUPLA FACE BILLABONG</h3>
                <span className='price-product'>R$321.00</span>
                <div className='btn-buy'>
                        <button onClick={() => addToCart(product)}>COMPRAR AGORA</button>
                        <button onClick={() => addToCart(product)}>ADICIONAR AO CARRINHO</button>
                </div>
                <div className='size-product'>
                    <h3>TAMANHO</h3>
                    <button>P</button>
                    <button>M</button>
                    <button>G</button>
                    <button>XG</button>
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
    ]

    return (
        <div>
            <header>
                <button onClick={() => navigateTo(page_cart)}>Go to Cart ({cart.length})</button>
                <button onClick={() => navigateTo(page_prod)}>X</button>
            </header>
            {page === 'products' && renderDetailsProduct}
            {page === 'cart' && 
                <ShoppingCart 
                    removeFromCart={removeFromCart}
                    cart={cart} 
                />
            }
        </div>
    )
}

export default DetailsProduct
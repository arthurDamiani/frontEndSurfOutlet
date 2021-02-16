import react, { useState } from 'react'
import roupa from '../assets/roupa.png'
import roupa2 from '../assets/roupa2.png'
import roupa3 from '../assets/roupa3.png'
import roupa4 from '../assets/roupa4.png'
import api from '../services/api'

const ProductsReducer = () => {

  const [prod, setProd] = useState([])

    api.get('/produto').then(response => response)
        .then(res => res.data.retorno.produtos)
        .then(res => res.map(el => el.produto))
        .then(res => setProd(res))

    const productsDefaultState = {
        products: [prod],
        cart: [],
        total: 0,
      }

      const products = (state = productsDefaultState, action) => {
        switch (action.type) {
          case 'ADD_TO_CART':
            const addedProduct = state.products.find((product) => action.payload.id === product.id)
            const existingProduct = state.cart.find((existingProd) => action.payload.id === existingProd.id)
      
            if (existingProduct) {
              addedProduct.quantity += 1
              return {
                ...state,
                total: state.total + addedProduct.price
              }
            } else {
              addedProduct.quantity = 1;
              const newTotal = state.total + addedProduct.price
              return {
                ...state,
                cart: [...state.cart, addedProduct],
                total: newTotal
              }
            }
      
          case 'REMOVE_FROM_CART':
            const productToRemove = state.cart.find((product) => action.id === product.id)
            const removeProduct = state.cart.filter((product) => action.id !== product.id)
      
            const newTotal = state.total - (productToRemove.price * productToRemove.quantity)
            return {
              ...state,
              cart: removeProduct,
              total: newTotal
            }
      
          case 'DECREMENT':
            const products = state.cart.find((product) => action.id === product.id)
      
            if (products.quantity > 1) {
              products.quantity -= 1;
              const newTotal = state.total - products.price
              return {
                ...state,
                total: newTotal
              }
            } else {
              return state
            }
      
          case 'CLEAR_CART':
            return {
              ...state,
              cart: [],
              total: 0
            }
          default:
            return state
        }
      }

      console.log(productsDefaultState.products)

      return products      

}

export default ProductsReducer






const productsDefaultState = {
    products: [],
    cart: [],
    total: 0,
}

const productsReducer = (state = productsDefaultState, action) => {
  switch (action.type) {
    case 'GET_API':
      
      return {
        ...state,
        products: action.payload
      }

    case 'ADD_TO_CART':
      const addedProduct = state.products.find((product) => action.payload.codigo === product.codigo)
      const existingProduct = state.cart.find((existingProd) => action.payload.codigo === existingProd.codigo)

      if (existingProduct) {
        window.alert('Produto ja foi adicionado no carrinho')

        return {
          ...state,
        }

      } else {
        addedProduct.quantity = 1
        const newTotal = state.total + parseFloat(addedProduct.preco)

        return {
          ...state,
          cart: [...state.cart, addedProduct],
          total: newTotal
        }
      }

    case 'REMOVE_FROM_CART':
      const productToRemove = state.cart.find((product) => action.codigo === product.codigo)
      const removeProduct = state.cart.filter((product) => action.codigo !== product.codigo)

      const newTotal = state.total - (parseFloat(productToRemove.preco) * productToRemove.quantity)

      return {
        ...state,
        cart: removeProduct,
        total: newTotal
      }

    case 'DECREMENT':
      const products = state.cart.find((product) => action.codigo === product.codigo)

      if (products.quantity > 1) {
        products.quantity -= 1
        const newTotalDecrement = state.total - parseFloat(products.preco)

        return {
          ...state,
          total: newTotalDecrement
        }
        
      } else {
        return state
      }

      case 'INCREMENT':
      const productsIncrement = state.cart.find((product) => action.codigo === product.codigo)


      productsIncrement.quantity += 1
      const newTotalIncrement = state.total + parseFloat(productsIncrement.preco)
  
      return {
        ...state,
        total: newTotalIncrement
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

export default productsReducer
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

export default productsReducer
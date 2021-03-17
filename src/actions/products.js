export const getProducts = (product) => ({
  type: 'GET_API',
  payload: product
})

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product
})

export const removeFromCart = (codigo) => ({
  type: 'REMOVE_FROM_CART',
  codigo
})

export const decrementFromCart = (codigo) => ({
  type: 'DECREMENT',
  codigo
})

export const incrementFromCart = (codigo) => ({
  type: 'INCREMENT',
  codigo
})

export const clearProducts = () => ({
  type: 'CLEAR_PRODUCTS'
})

export const clearCart = () => ({
  type: 'CLEAR_CART'
})

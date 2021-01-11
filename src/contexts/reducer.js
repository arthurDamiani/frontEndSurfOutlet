/* eslint-disable default-case */
export const initialState = {
    cart: [],
}

//Selector
export const getCartTotal = cart => cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

        var cartArray = JSON.stringify(state.cart)
        console.log(cartArray)


            return {
                ...state,
                cart: [...state.cart, action.item],
            }

            

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id)
            }

        default:
            return state
    }
}

export default reducer
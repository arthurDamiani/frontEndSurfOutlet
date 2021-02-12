import roupa from '../assets/roupa.png'
import roupa2 from '../assets/roupa2.png'
import roupa3 from '../assets/roupa3.png'
import roupa4 from '../assets/roupa4.png'
import api from '../services/api'


const fetchProducts = async () => {
    const res = await api.get('/produto').then(response => response)
    return (res.data.retorno.produtos).map(el => el.produto)
}

Promise.any([fetchProducts()]).then((value) => console.log(value))

const productsDefaultState = {
    products: [
      {
        id: 1,
        title: 'JAQUETA',
        price: 300.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa,
        size: ['P', 'M', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'acessorios', 
        brand: 'Nike'
    },
    {
        id: 2,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa3,
        size: ['P', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'acessorios', 
        brand: 'Nike'
    },
    {
        id: 3,
        title: 'JAQUETA',
        price: 400.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'acessorios', 
        brand: 'Nike'
    },
    {
        id: 4,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa2,
        size: ['P', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'acessorios', 
        brand: 'Nike'
    },
    {
        id: 5,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa,
        size: ['P', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'acessorios', 
        brand: 'Nike'
    },
    {
        id: 6,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'acessorios', 
        brand: 'Nike'
    },
    {
        id: 7,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'acessorios', 
        brand: 'Vans'
    },
    {
        id: 8,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'tenis', 
        brand: 'Vans'
    },
    {
        id: 9,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'tenis', 
        brand: 'Vans'
    },
    {
        id: 10,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'tenis', 
        brand: 'Vans'
    },
    {
        id: 11,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'tenis', 
        brand: 'Vans'
    },
    {
        id: 12,
        title: 'JAQUETA',
        price: 300.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'tenis', 
        brand: 'adidas'
    },
    {
        id: 13,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa3,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'tenis', 
        brand: 'adidas'
    },
    {
        id: 14,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'tenis', 
        brand: 'adidas'
    },
    {
        id: 15,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa2,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'adidas'
    },
    {
        id: 16,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'adidas'
    },
    {
        id: 17,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'adidas'
    },
    {
        id: 18,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'adidas'
    },
    {
        id: 19,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'adidas'
    },
    {
        id: 20,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'adidas'
    },
    {
        id: 21,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'adidas'
    },
    {
        id: 22,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'billabong'
    },
    {
        id: 23,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'billabong'
    },
    {
        id: 24,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'billabong'
    },
    {
        id: 25,
        title: 'JAQUETA',
        price: 300.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'camisetas', 
        brand: 'billabong'
    },
    {
        id: 26,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa3,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 27,
        title: 'JAQUETA',
        price: 400.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 28,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa2,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 29,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 30,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 31,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 32,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 33,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 34,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 35,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'surf', 
        brand: 'billabong'
    },
    {
        id: 36,
        title: 'JAQUETA',
        price: 300.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'billabong'
    },
    {
        id: 37,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa3,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'billabong'
    },
    {
        id: 38,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'billabong'
    },
    {
        id: 39,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa2,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'billabong'
    },
    {
        id: 40,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'lacoste'
    },
    {
        id: 41,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'lacoste'
    },
    {
        id: 42,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'lacoste'
    },
    {
        id: 43,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'lacoste'
    },
    {
        id: 44,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'lacoste'
    },
    {
        id: 45,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'lacoste'
    },
    {
        id: 46,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'lacoste'
    },
    {
        id: 47,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'lacoste'
    },
    {
        id: 48,
        title: 'JAQUETA',
        price: 179.90,
        discount: 'à vista com 5% de desconto no boleto',
        image: roupa4,
        size: ['P', 'M', 'G', 'GG'],
        installments: 10,
        currencyId: "BRL",
        currencyFormat: "R$",
        style: "Black with custom print",
        category: 'bermudas', 
        brand: 'lacoste'
    }
    ],
  cart: [],
  total: 0,
}

console.log(productsDefaultState.products)

const productsReducer = (state = productsDefaultState, action) => {
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

export default productsReducer
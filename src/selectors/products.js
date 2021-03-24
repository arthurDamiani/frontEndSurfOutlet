export const getCartState = state => state.productsReducer.cart

export const getColorState = state => state.productsReducer.color

export const getSizeState= state => state.productsReducer.size

export const getCartTotal = state => state.productsReducer.total

export const getAllProducts = state => state.productsReducer.products

export const getAllProductBrands = state => state.productsReducer.products
    .map((product) => product.marca)
    .reduce((unique, brand) => unique.includes(brand) ? unique : [...unique, brand], [])

export const getEstoque = state => state.productsReducer.products
    .map((product) => product)

    

export const getAllProductSize = state => state.productsReducer.products
    .map((product) => product)
    .map(el => el.variacoes)
    .map(el => el[0])
    .map(el => el.variacao)
    .map(el => el.nome)
    .map(el => el.split(':'))
    .map(el => el.slice(2, 3))
    .map(el => el[0])
    
export const getAllProductColor = state => state.productsReducer.products
    .map((product) => product)
    .map(el => el.variacoes)
    .map(el => el[0])
    .map(el => el.variacao)
    .map(el => el.nome)
    .map(el => el.substr(4))
    .map(el => el.split(';'))
    .map(el => el.slice(0, 1))
    .map(el => el[0])
        

// export const getFilteredProducts = state => {
//     const { productsReducer: { products }, filters } = state
//     return products.filter((product) => {

//         if (filters.brand.length > 0 && filters.category.length === 0) {
//             return filters.brand.includes(product.brand)
//         } else if (filters.brand.length === 0 && filters.category.length > 0) {
//             return filters.category.includes(product.category)
//         } else if (filters.brand.length > 0 && filters.category.length > 0) {
//             return filters.brand.includes(product.brand) && filters.category.includes(product.category)
//         } else {
//             return product
//         }


//     }).sort((a, b) => {
//         const textA = a.marca
//         const textB = b.marca
//         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
//     })
// }
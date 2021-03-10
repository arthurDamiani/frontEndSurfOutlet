export const getCartState = state => state.productsReducer.cart;

export const getCartTotal = state => state.productsReducer.total;

export const getAllProducts = state => state.productsReducer.products;

export const getAllProductBrands = state => state.productsReducer.products
    .map((product) => product.marca)
    .reduce((unique, brand) => unique.includes(brand) ? unique : [...unique, brand], [])

export const getAllProductCategory = state => state.productsReducer.products
    .map((product) => product.preco)
    .reduce((unique, category) => unique.includes(category) ? unique : [...unique, category], [])

export const getAllProductGenre = state => state.productsReducer.products
    .map((product) => product.genre)
    .reduce((unique, genre) => unique.includes(genre) ? unique : [...unique, genre], [])

export const getAllProductSize = state => state.productsReducer.products
    .map((product) => product.size)
    .reduce((unique, size) => unique.includes(size) ? unique : [...unique, size], [])

export const getAllProductPrice = state => state.productsReducer.products
    .map((product) => product.price)
    .reduce((unique, price) => unique.includes(price) ? unique : [...unique, price], [])

export const getAllProductColor = state => state.productsReducer.products
    .map((product) => product.color)
    .reduce((unique, color) => unique.includes(color) ? unique : [...unique, color], [])

export const getAllProductDepartment = state => state.productsReducer.products
    .map((product) => product.department)
    .reduce((unique, department) => unique.includes(department) ? unique : [...unique, department], [])


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
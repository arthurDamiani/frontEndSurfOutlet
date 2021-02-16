export const getCartState = state => state.ProductsReducer.cart;

export const getCartTotal = state => state.ProductsReducer.total;

export const getAllProducts = state => state.ProductsReducer.products;

export const getAllProductBrands = state => state.ProductsReducer.products
    .map((product) => product.brand)
    .reduce((unique, brand) => unique.includes(brand) ? unique : [...unique, brand], [])

export const getAllProductCategory = state => state.ProductsReducer.products
    .map((product) => product.category)
    .reduce((unique, category) => unique.includes(category) ? unique : [...unique, category], [])

export const getAllProductGenre = state => state.ProductsReducer.products
    .map((product) => product.genre)
    .reduce((unique, genre) => unique.includes(genre) ? unique : [...unique, genre], [])

export const getAllProductSize = state => state.ProductsReducer.products
    .map((product) => product.size)
    .reduce((unique, size) => unique.includes(size) ? unique : [...unique, size], [])

export const getAllProductPrice = state => state.ProductsReducer.products
    .map((product) => product.price)
    .reduce((unique, price) => unique.includes(price) ? unique : [...unique, price], [])

export const getAllProductColor = state => state.ProductsReducer.products
    .map((product) => product.color)
    .reduce((unique, color) => unique.includes(color) ? unique : [...unique, color], [])

export const getAllProductDepartment = state => state.ProductsReducer.products
    .map((product) => product.department)
    .reduce((unique, department) => unique.includes(department) ? unique : [...unique, department], [])

const currentPage = 1
const postPerPage = 15 

const indexOfLastPost = currentPage * postPerPage
const indexOfFirstPost = indexOfLastPost - postPerPage

export const getFilteredProducts = state => {
    const { ProductsReducer: { products }, filters } = state
    return products.filter((product) => {

        if (filters.brand.length > 0 && filters.category.length === 0) {
            return filters.brand.includes(product.brand)
        } else if (filters.brand.length === 0 && filters.category.length > 0) {
            return filters.category.includes(product.category)
        } else if (filters.brand.length > 0 && filters.category.length > 0) {
            return filters.brand.includes(product.brand) && filters.category.includes(product.category)
        } else {
            return product
        }

    }).sort((a, b) => {
        const textA = a.brand.toUpperCase();
        const textB = b.brand.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    })
}








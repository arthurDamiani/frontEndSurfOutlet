export const getCartState = state => state.productsReducer.cart;

export const getCartTotal = state => state.productsReducer.total;

export const getAllProducts = state => state.productsReducer.products;

export const getAllProductBrands = state => state.productsReducer.products
    .map((product) => product.brand)
    .reduce((unique, brand) => unique.includes(brand) ? unique : [...unique, brand], [])

export const getAllProductCategory = state => state.productsReducer.products
    .map((product) => product.category)
    .reduce((unique, category) => unique.includes(category) ? unique : [...unique, category], [])


export const getFilteredProducts = state => {
    const { productsReducer: { products }, filters } = state
    return products.filter((product) => {

        if (filters.brand.length > 0 && filters.name.length === 0) {
            return filters.brand.includes(product.brand)
        } else if (filters.category.length > 0 && filters.name.length === 0) {
            return filters.category.includes(product.category)
        } else {
            return product
        }

    }).sort((a, b) => {
        const textA = a.brand.toUpperCase();
        const textB = b.brand.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
}
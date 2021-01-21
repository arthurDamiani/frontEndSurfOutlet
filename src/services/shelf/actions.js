import { FETCH_PRODUCTS } from './actionTypes'
 
import { productsAPI } from '../util'

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1
    if (a.price > b.price) return 1
    return 0
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1
    if (a.price < b.price) return 1
    return 0
  }
};

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
      let { products } = productsAPI

      if (!!filters && filters.length > 0) {
        products = products.filter(p => filters.find(f => p.size.find(size => size === f)))
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback()
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      })
}

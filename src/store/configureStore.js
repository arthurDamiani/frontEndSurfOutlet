import { createStore, combineReducers } from 'redux'
import ProductsReducer from './../reducers/ProductsReducer'
import filtersReducer from '../reducers/filtersReducer'

const configureStore = () => {
  const store = createStore(
    combineReducers({
      ProductsReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}

export default configureStore
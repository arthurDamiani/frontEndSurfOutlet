import { createStore, combineReducers } from 'redux'
import productsReducer from './../reducers/productsReducer'
import filtersReducer from '../reducers/filtersReducer'

const configureStore = () => {
  const store = createStore(
    combineReducers({
      productsReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}

export default configureStore
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import productsReducer from './../reducers/productsReducer'
import filtersReducer from '../reducers/filtersReducer'

const rootReducer = combineReducers({
      productsReducer,
      filters: filtersReducer,
})

const middleware = [thunk]

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer)

export const store = createStore(
    persistedReducer, 
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
  )

export const persistedStore = persistStore(store)
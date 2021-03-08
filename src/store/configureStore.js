import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productsReducer from './../reducers/productsReducer'
import filtersReducer from '../reducers/filtersReducer'

const rootReducer = combineReducers({
      productsReducer,
      filters: filtersReducer,
})

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)
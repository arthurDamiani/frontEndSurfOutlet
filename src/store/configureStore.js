import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import productsReducer from "./../reducers/productsReducer";

const rootReducer = combineReducers({
  productsReducer,
});

const middleware = [thunk];

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

const initState = {};

export const store = createStore(
  persistedReducer,
  initState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistedStore = persistStore(store);

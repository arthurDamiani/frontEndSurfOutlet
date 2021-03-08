import React from 'react'
import './styles/Global.css'

import Routes from './routes/routes'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistedStore} from './store/configureStore'



function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App

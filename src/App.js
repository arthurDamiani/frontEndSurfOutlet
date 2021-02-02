import React from 'react'
import './styles/Global.css'

import Routes from './routes/routes'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from './Root'
import reducer, { initialState } from './contexts/reducer';
import { StateProvider } from './contexts/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
   </React.StrictMode>,
  document.getElementById('root')
);

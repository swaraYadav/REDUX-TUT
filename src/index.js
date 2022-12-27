import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootRuducer from './rootRuducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootRuducer)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

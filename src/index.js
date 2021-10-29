import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';






ReactDOM.render(
 
    <Provider store={store}>
      <App />
    </Provider>,
  
  document.getElementById('app-root')
);
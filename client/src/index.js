import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {Store,persistor} from './Redux/store.js';
import {PersistGate} from 'redux-persist/es/integration/react';
import * as serviceWorker from './serviceWorker'
ReactDOM.render(

  <Provider store={Store}>
     <BrowserRouter>
     <PersistGate persistor={persistor} >
     <App />
     </PersistGate>
    
    </BrowserRouter>
  </Provider>
   
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

serviceWorker.register();
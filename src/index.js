import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './redux/reducers';
// import thunk from 'redux-thunk';
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './context/reducer';
import { ZeitProvider } from '@zeit-ui/react';

// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <ZeitProvider>
      <App />
    </ZeitProvider>
  </StateProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

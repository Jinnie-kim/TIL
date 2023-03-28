import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware(); // saga middleware 만들기

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { Provider } from 'react-redux';
// import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import rootSaga from './sagas';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))

);
let persistor = persistStore(store)

// const store = createStore(
//    reducer,
//    applyMiddleware(sagaMiddleware, logger),
// );
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

//React
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';
import {
  Provider
} from "react-redux";

//store
import {
  createBrowserHistory
} from 'history'
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import {
  connectRouter,
  routerMiddleware
} from 'connected-react-router'
//reducer
import rootReducer from './reducers/index';

//middleware
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//persist state
import {
  persistStore,
  persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  PersistGate
} from 'redux-persist/integration/react'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
const expireReducer = require('redux-persist-expire');


const history = createBrowserHistory()

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
  transforms: [
    expireReducer("users", {
      expireSeconds: 10
    })
  ]
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  connectRouter(history)(persistedReducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      logger
    )
  )
);

let persistor = persistStore(store)


ReactDOM.render( <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App history={history}/>
    </PersistGate>
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();

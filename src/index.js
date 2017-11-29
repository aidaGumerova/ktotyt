import React from 'react';
//import ReactDOM from 'react-dom';

import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
//import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import './index.css';
import App from './containers/App';
import allReducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(allReducers, applyMiddleware(middleware))

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="wrapper">
        <App/>
        <footer className="footer"></footer>
      </div>

    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


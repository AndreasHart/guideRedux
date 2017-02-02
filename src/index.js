import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import throttle from 'lodash/throttle';

import api from './middleware/api'
import FilterBar from './containers/FilterBar'
import App from './components/App'

import { Router, Route, hashHistory } from 'react-router'
import { loadState, saveState } from './localStorage'

const persistedState = loadState();
const logger = createLogger();
const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(thunk, api, logger ),
      DevTools.instrument()
      )
  );

store.subscribe(throttle(() => {
  saveState({
    eventss: store.getState().eventss,
    visibilityFilter: store.getState().visibilityFilter
  });
}, 1000));


  render(
  <Provider store={store}>
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/filter" component={FilterBar} />
    </Router>
    <DevTools/>
  </div>
  </Provider>,
  document.getElementById('root')
);





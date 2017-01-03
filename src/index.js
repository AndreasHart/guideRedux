import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools'
import reducer from './reducers'
import thunk from 'redux-thunk'
import invariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger'
import api from './middleware/api'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import App from './components/App'

const store = createStore(
    reducer,
    compose(
      applyMiddleware(invariant(), thunk, api, createLogger()),
      DevTools.instrument()
      )
  )


  render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)






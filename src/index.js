import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools'
import reducer from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from './middleware/api'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import App from './components/App'

const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk, api, createLogger()),
      DevTools.instrument()
      )
  )
// const history = syncHistoryWithStore(browserHistory, store)


  render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)






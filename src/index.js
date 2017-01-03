import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from './middleware/api'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import App from './components/App'

const logger = createLogger();
const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, api, logger ),
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






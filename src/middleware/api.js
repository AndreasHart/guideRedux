import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'



const API_ROOT = 'http://localhost:3004'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (endpoint, schema) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        const camelizedJson = camelizeKeys(json)

        return Object.assign({},
          camelizedJson.events,
          {  }
        )
      })
    )
}



// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  // if(action.type === 'TOGGLE_MODAL' || action.type === 'UPDATE_FILTER' ){
  //   debugger;
  //   next(actionWith({ type: action.type }))
  // }
  const callAPI = action[CALL_API]
 if (typeof callAPI === 'undefined') {
    return next(action)
  }
  let { endpoint } = callAPI
  const { types } = callAPI

const [request, success, failure ] = types

 const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  next(actionWith({ type: request }))

  return callApi(endpoint).then(
      response =>
        next(actionWith({
        response,
        type: success
      })),
      error => next(actionWith({
        type: failure,
        error: error.message || 'Something bad happened'
      }))
    )
}


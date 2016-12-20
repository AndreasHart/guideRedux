import union from 'lodash/union'

const events = ({ types, mapActionToKey }) => {
  // if (!types.every(t => typeof t === 'string')) {
  //   throw new Error('Expected types to be strings.')
  // }
  // if (typeof mapActionToKey !== 'function') {
  //   throw new Error('Expected mapActionToKey to be a function.')
  // }

  const [ request, success, failure ] = types
  const event = (state = {}, action) => {
    switch (action.type) {
      case request:
        return {
          state
        }
      case success:
      debugger;
        return {
          events: action.response
        }
      case failure:
        return {
          state
        }
      default:
        return state
    }
  }

    return (state = { events: { events:{} } }, action) => {
    switch (action.type) {
      case request:
      case success:
      case failure:
        debugger;


        // if (typeof key !== 'string') {
        //   throw new Error('Expected key to be a string.')
        // }
        return { ...state,
           events: event(state, action)
        }
      default:
        return state
    }
  }
}

export default events


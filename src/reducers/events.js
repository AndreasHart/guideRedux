
const events = ({ types, mapActionToKey }) => {

  const [ request, success, failure ] = types
  const event = (state = {}, action) => {
    switch (action.type) {
      case request:
        return {
          state
        }
      case success:
      //debugger;
        return {
          events: action.response
        }
      case failure:
        return {
          state
        }
      default:
        return {...state , error : 'it broke'}
    }
  }

    return (state = { events: { events:{} } }, action) => {
    switch (action.type) {
      case request:
      case success:
      case failure:
        //debugger;

        return { ...state,
           events: event(state, action)
        }
      default:
        return state
    }
  }
}

export default events


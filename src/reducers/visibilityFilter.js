const visibilityFilter = (state = {type: 'UPDATE_FILTER', input: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
    //debugger;
      return action
    default:
      return state
  }
}

export default visibilityFilter

import { combineReducers } from 'redux'
import events from './events'
import merge from 'lodash/merge'
import visibilityFilter from './visibilityFilter'
import * as ActionTypes from '../actions'

// // Updates an entity cache in response to any action with response.entities.
// const entities = (state = { events: {} }, action) => {
//   if (action.response && action.response.entities) {
//     return merge({}, state, action.response.entities)
//   }

//   return state
// }
const modal = (state = {show:false,id:null} , action)=>{
  switch(action.type){
    case 'TOGGLE_MODAL':
      debugger;
        if( typeof(action.id) === 'string' ){
        return {show: !state.show, id: action.id}
      }else{
        return {show: !state.show, id: ''}
      }
      default:
      return state
  }
}


const eventss = combineReducers({
  getEvents: events({
    mapActionToKey: action => action.response.id,
    types: [
      ActionTypes.REQUEST,
      ActionTypes.SUCCESS,
      ActionTypes.FAILURE
    ]
  })
})


const todoApp = combineReducers({
  eventss,
  visibilityFilter,
  modal
})

export default todoApp

import { combineReducers } from 'redux'
import events from './events'
import visibilityFilter from './visibilityFilter'
import * as ActionTypes from '../actions'
import { routerReducer } from 'react-router-redux'


const modal = (state = { show:false , ev: null } , action)=>{
  switch(action.type){
    case 'TOGGLE_MODAL':
      //debugger;
        return {show: !state.show, ev: action.ev }
      default:
      return state
  }
}

const routing = combineReducers({
  routing: routerReducer
})

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
  modal,
  routing
})



export default todoApp

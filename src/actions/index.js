import { CALL_API, Schemas } from '../middleware/api'


let nextTodoId = 0
export const addEvent = (info) => ({
  type: 'ADD_EVENT',
  id: info._id,
  info
})

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'


export const fetchEvents = () => ({
  [CALL_API]: {
    types:[ REQUEST , SUCCESS, FAILURE ],
    endpoint: '/publications/events'
  }
})

export const sortEvents = () => ({
  type:'FETCH_EVENTS',
  events:()=> {
    fetchEvents();
  }

})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleModal = (ev) => ({
  type: 'TOGGLE_MODAL',
  ev
})

export const updateFilter = (input) => ({
  type: 'UPDATE_FILTER',
  input
})

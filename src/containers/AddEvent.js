import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents, updateFilter } from '../actions'

let AddEvent = ({ dispatch }) => {
  let input


  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        debugger;
        dispatch(fetchEvents());
      }} >
          <button type="submit">
          Add Events
        </button>
      </form>
    </div>
  )
}


AddEvent = connect()(AddEvent)

export default AddEvent


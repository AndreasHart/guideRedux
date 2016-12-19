import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents, updateFilter } from '../actions'

let AddEvent = ({ dispatch }) => {
  let input


  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        if (!input) {
          debugger;
          return
        }
        debugger;

        dispatch(fetchEvents());
        input.value = [];
      }} onChange ={e => {
        e.preventDefault()
        dispatch(updateFilter(input.value))
      }}>
        <label>Filter</label>
        <input ref={node => {
          input = node
        }} />
          <button type="submit">
          Add Events
        </button>
      </form>
    </div>
  )
}


AddEvent = connect()(AddEvent)

export default AddEvent


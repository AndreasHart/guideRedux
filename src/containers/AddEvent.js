import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents} from '../actions'

let AddEvent = ({ dispatch }) => {


  return (
    <div className='addEvent'>
      <form onSubmit={e => {
        e.preventDefault()
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



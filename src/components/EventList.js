import React, { PropTypes } from 'react'
import Event from './EventReal'


const EventList = ({ events, onEventClick }) => (
  <ul>

    {console.log('somehting',events)}
    { events ? events.map(e => {

      return(
      <Event
        key={e.id}
        event={e}
        onSingleEvent={()=>onEventClick(e.id)}
      />)
    }) :''
  }
  </ul>

)
EventList.propTypes = {
  events: PropTypes.array,
  onEventClick: PropTypes.func.isRequired
}


export default EventList


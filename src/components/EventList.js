import React, { PropTypes } from 'react'
import Event from './EventReal'


const EventList = ({ events, onEventClick }) => (
  <ul>

    {console.log('somehting',events)}
    {(events.events && events.events.events) ? Object.keys(events.events.events).map(key => {
      let e = events.events.events[key];
      return(
      <Event
        key={e.id}
        event={e}
        onSingleEvent={onEventClick}
      />)
    }) : ''}
  </ul>

)
EventList.propTypes = {
  events: PropTypes.object,
  onEventClick: PropTypes.func.isRequired
}


export default EventList


import React, { PropTypes } from 'react'




const Event = ({ onSingleEvent,  event }) => (
  <li
  >
    <div className="col-sm-4">
          <div className="card card-block shadow" onClick={()=>onSingleEvent(event.id)}>
            <h3 className="card-title shadow">{event.text.activity}</h3>
            <p className="card-text">Where: {event.text.location}
              <br/>When: {event.text.date.toString().split('/').reverse().join('-')} at {event.text.startTime}
            </p>
        </div>
      </div>
  </li>
)


Event.propTypes = {
  onSingleEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
}

export default Event

import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'


const Event = ({ onSingleEvent,  event }) => (

    <div className="col-sm-4">
          <div className="card card-block shadow" >
            <h3 className="card-title shadow">{event.text.activity}</h3>
            <p className="card-text">Where: {event.text.location}
              <br/>When: {event.text.date.toString().split('/').reverse().join('-')} at {event.text.startTime}
            </p>
            <Button bsSize="xs" onClick={onSingleEvent}>More Details</Button>

        </div>
      </div>

)


Event.propTypes = {
  onSingleEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
}

export default Event

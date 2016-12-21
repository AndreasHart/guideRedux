import React, {  PropTypes } from 'react'
import { Button , Modal } from 'react-bootstrap';

const ModalComponent = ({ event, show, close }) => {
  debugger;

    return(
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{( event && event.text && event.text.activity) ? event.text.activity : ''} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <ul>Where: {(event && event.text && event.text.location) ? event.text.location : ''}</ul>
          <ul>
            When: { ( event && event.text && event.text.date.toString()) ? ( event.text.date.toString() ) : ''}
             @ { (event && event.text && event.text.startTime.toString()) ? ( event.text.startTime.toString() ) : '' }
           </ul>
          <ul>Address: {(event && event.text && event.text.address) ? event.text.address : ''}</ul>
          <ul>Participants </ul>
          <ul>Min: {(event && event.text && event.text.min) ? event.text.min : '0'} - Max: {(event && event.text && event.text.max) ? event.text.max : ''} </ul>
          <ul>Price: ${(event && event.text && event.text.price) ? event.text.price : ''} </ul>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close} active >Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

ModalComponent.propTypes = {
  event: PropTypes.object,
  close: PropTypes.func,
  show: PropTypes.bool.isRequired
}

export default ModalComponent

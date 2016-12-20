import { connect } from 'react-redux'
import { toggleModal,updateFilter } from '../actions'
import EventList from '../components/EventList'


const getVisibleEvents = (events  , visibilityFilter) => {
  switch (visibilityFilter.type) {
    case 'SHOW_ALL':
      return events
    case 'UPDATE_FILTER':
    debugger;
    if(events){
      return Object.keys(events).map(key=>{
         return events[key]
      }).filter(
        (ev) => {
          debugger;
          return ev.text.activity.toLowerCase().indexOf(visibilityFilter.input.toLowerCase()) !== -1;
        }
      );
    }
    default:
      return events
  }
}

// Object.keys(events.events.events).map(key => {
//       let e = events.events.events[key];
//       return(

const mapStateToProps = (state) => ({
    // events : state.eventss.getEvents.events.events
   // events: getVisibleEvents(state.events, state.visibilityFilter)
   events: getVisibleEvents(state.eventss.getEvents.events.events , state.visibilityFilter)
})

// const mapDispatchToProps = ({
//   onEventClick: toggleModal
//   })
const mapDispatchToProps = (dispatch) => {
  return {
    onEventClick: (id) => {
      dispatch(toggleModal(id))
    }
  }
}

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)

export default VisibleEventList

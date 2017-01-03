import { connect } from 'react-redux'
import { toggleModal,updateFilter } from '../actions'
import EventList from '../components/EventList'


const getVisibleEvents = (events  , visibilityFilter) => {
  switch (visibilityFilter.type) {
    case 'SHOW_ALL':
      return events
    case 'UPDATE_FILTER':
    if(events){
      return Object.keys(events).map(key=>{
         return events[key]
      }).filter(
        (ev) => {
          return ev.text.activity.toLowerCase().indexOf(visibilityFilter.input.toLowerCase()) !== -1;
        }
      )
    }else return {}

    default:
      return events
  }
}



const mapStateToProps = (state) => ({
    // events : state.eventss.getEvents.events.events
   // events: getVisibleEvents(state.events, state.visibilityFilter)
   events: getVisibleEvents(state.eventss.getEvents.events.events , state.visibilityFilter)
})

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


// .sort((a,b)=>{
//               return new Date(b.text.date) - new Date(a.text.date);
//             })
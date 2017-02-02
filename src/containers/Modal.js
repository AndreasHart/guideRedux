import { connect } from 'react-redux'
import { toggleModal } from '../actions'
import ModalComponent from '../components/ModalComponent'

// const getEvent = ( events, id ) => {

//   if( events && id ){

//    return Object.keys(events).map(key=>{
//          return events[key]
//       }).filter((ev)=>{

//       if(ev.id === id){
//         //debugger;
//         return ev
//       }
//     },id)
//   }
//   else return {}
// }



const mapStateToProps = (state) => ({
   show: state.modal.show,
   event: state.modal.ev
})


const mapDispatchToProps = (dispatch) => {
  return {
    close:(ev) => {
      dispatch(toggleModal(ev))
    }
  }
}

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent)

export default VisibleEventList

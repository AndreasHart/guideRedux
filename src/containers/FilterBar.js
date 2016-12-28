import { connect } from 'react-redux'
import { updateFilter } from '../actions'
import FilterBarComponent from '../components/FilterBar'

const mapStateToProps = (state) => ({
  input: state.visibilityFilter.input
})

const mapDispatchToProps = (dispatch) => ({
  change: (e) => {
        debugger
        dispatch(updateFilter(e.value))
      }
})

const FilterBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBarComponent)

export default FilterBar
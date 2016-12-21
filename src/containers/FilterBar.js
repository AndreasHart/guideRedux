import { connect } from 'react-redux'
import { updateFilter } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state, ownProps) => ({
  input: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
  onChange: (e) => {
        dispatch(updateFilter(e))
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)()

export default FilterLink
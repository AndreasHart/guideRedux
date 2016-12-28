import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'


const FilterBar = ({ input, change }) => (

    <div className="col-sm-4">
      <form onChange={()=>change(input)}>
        <label>Filter</label>
        <input ref={node => {
          input = node
        }} />
      </form>
      </div>

)


FilterBar.propTypes = {
  input: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired
}

export default FilterBar
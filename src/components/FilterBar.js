import React, { PropTypes } from 'react'


const FilterBar = ({ input, change }) => (

    <div className="col-sm-4">
        <label>Filter</label>
        <input onChange={()=>change(input)} ref={node => {
          input = node
        }} value={input} />
      </div>

)


FilterBar.propTypes = {
  input: PropTypes.string,
  change: PropTypes.func.isRequired
}

export default FilterBar
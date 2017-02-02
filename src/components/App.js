import React from 'react'
import Modal from '../containers/Modal'
import AddEvent from '../containers/AddEvent'
import FilterBar from '../containers/FilterBar'
import VisibleEventList from '../containers/VisibleEventList'

const App = () => (
  <div className='app'>
    <div className='nav'>
      <FilterBar/>
      <AddEvent/>
    </div>
    <VisibleEventList />
    <Modal />
  </div>
)

export default App


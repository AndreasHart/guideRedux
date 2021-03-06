import React from 'react'
import Modal from '../containers/Modal'
import AddEvent from '../containers/AddEvent'
import FilterBar from '../containers/FilterBar'
import DevTools from '../containers/DevTools'
import VisibleEventList from '../containers/VisibleEventList'

const App = () => (
  <div className='col-xs-12'>
    <AddEvent/>
    <FilterBar />
    <VisibleEventList />
    <Modal />
    <DevTools/>
  </div>
)

export default App


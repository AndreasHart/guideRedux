import React from 'react'
import Footer from './Footer'
import AddEvent from '../containers/AddEvent'
import DevTools from '../containers/DevTools'
import VisibleEventList from '../containers/VisibleEventList'

const App = () => (
  <div className='col-xs-12'>
    <AddEvent />
    <VisibleEventList />
    <DevTools/>
    <Footer />
  </div>
)

export default App


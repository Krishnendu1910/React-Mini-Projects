import React from 'react'
import Sidebar from './Sidebar';
import './Sidebar.css'

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <div className="main-content">
        <h1>Sidebar Components using React</h1>
        <p>Your content goes here...</p>
      </div>
    </div>
  )
}

export default App

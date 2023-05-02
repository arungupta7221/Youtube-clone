import React from 'react'
import Sidebar from './Sidebar'
import MainComponent from './MainComponent'

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainComponent />
    </div>
  )
}

export default Body

import React from 'react'
import user from '../assests/user.png'

const LiveChats = ({ name, message }) => {
  return (
    <div className="flex py-2">
      <div>
        <img src={user} alt="user" className="h-8" />
      </div>
      <div>
        <span className="px-3 font-semibold text-gray-400">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default LiveChats

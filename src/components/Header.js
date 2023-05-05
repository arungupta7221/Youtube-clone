import React from 'react'
import menu from '../assests/menu.png'
import logo from '../assests/logo.png'
import user from '../assests/user.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src={menu}
          alt="menu"
          className="h-8 mr-7 cursor-pointer"
          onClick={() => handleToggle()}
        />

        <img src={logo} alt="logo" className="h-8 mx-2" />
      </div>
      <div className="col-span-10 px-10 ">
        <input type="text" className="border border-gray-500 w-1/2 p-2 rounded-l-full" />
        <button className="p-2 border border-gray-500 rounded-r-full bg-gray-100 py-2 px-5">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img src={user} alt="user" className="h-8" />
      </div>
    </div>
  )
}

export default Header

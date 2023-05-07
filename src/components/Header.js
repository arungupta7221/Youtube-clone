import React, { useEffect, useState } from 'react'
import menu from '../assests/menu.png'
import logo from '../assests/logo.png'
import user from '../assests/user.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/constant'
// import { AiOutlineHistory } from 'react-icons/ai'

const Header = () => {
  const [search, setSearch] = useState('')
  const [searchSuggestion, setSearchSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(toggleMenu())
  }
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200) //debouncing
    return () => {
      clearTimeout(timer)
    }
  }, [search])
  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search)
    const json = await data.json()
    setSearchSuggestion(json[1])
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
        <div>
          <input
            type="text"
            className="border border-gray-500 w-1/2 p-2 rounded-l-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="p-2 border border-gray-500 rounded-r-full bg-gray-100 py-2 px-5">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="bg-white mt-1 px-3 py-2 w-[33rem] border border-gray-100 rounded-xl shadow-md absolute">
            {searchSuggestion.map((sugg) => {
              return (
                <li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={sugg}>
                  {sugg}
                </li>
              )
            })}
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img src={user} alt="user" className="h-8" />
      </div>
    </div>
  )
}

export default Header

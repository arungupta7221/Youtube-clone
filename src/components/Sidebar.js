import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen)

  if (!isMenuOpen) return null
  return (
    <div className="shadow-lg w-48 p-5">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Library</li>
      </ul>
      <hr className="mt-2" />
      <h2 className="font-bold pt-5">Subscriptions</h2>
      <ul>
        <li>Music</li>
        <li>Video</li>
        <li>Movie</li>
        <li>Sports</li>
      </ul>
      <hr className="mt-2" />
      <h2 className="font-bold pt-5">Explore</h2>
      <ul>
        <li>Trending</li>
        <li>Live</li>
        <li>Learning</li>
      </ul>
    </div>
  )
}

export default Sidebar

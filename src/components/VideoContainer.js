import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link, useDispatch } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  }, [])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()

    setVideos(json.items)
  }
  return (
    <div className="flex flex-wrap">
      {videos.map((vid) => {
        return (
          <Link key={vid.id} to={'/watch?v=' + vid.id}>
            <VideoCard info={vid} />
          </Link>
        )
      })}
    </div>
  )
}

export default VideoContainer

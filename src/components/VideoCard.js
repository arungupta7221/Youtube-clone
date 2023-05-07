import React from 'react'

const VideoCard = ({ info }) => {
  return (
    <div className="p-2 m-4 w-56 shadow-lg h-[20rem]">
      <img className="rounded-lg" alt="thumbnail" src={info?.snippet?.thumbnails?.medium.url} />
      <ul>
        <li className="font-bold py-2">{`${info?.snippet?.title?.substring(0, 30)}........`}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard

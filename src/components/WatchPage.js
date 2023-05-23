import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChatsContainer from './LiveChatsContainer'
const WatchPage = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('v'))
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <div className="flex w-full">
      <div>
        <div className="p-5 m-5">
          <iframe
            width="900"
            height="500"
            src={
              'https://www.youtube.com/embed/' + searchParams.get('v') + '?wmode=opaque&autoplay=1'
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <CommentContainer />
      </div>
      <div className="border border-gray-200 p-5 w-full h-[32rem] mt-8 mr-12 rounded-xl overflow-y-scroll ">
        <LiveChatsContainer />
      </div>
    </div>
  )
}

export default WatchPage

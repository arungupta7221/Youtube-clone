import React, { useEffect } from 'react'
import LiveChats from './LiveChats'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generate, makeid } from '../utils/helper'

const LiveChatsContainer = () => {
  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.chat.messages)
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: makeid(20),
        }),
      )
    }, 1000)

    return () => clearInterval(i)
  }, [])
  return (
    <>
      {chatMessages.map((chat, index) => (
        <LiveChats key={index} name={chat.name} message={chat.message} />
      ))}
    </>
  )
}

export default LiveChatsContainer

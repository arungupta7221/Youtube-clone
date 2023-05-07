import React from 'react'
import user from '../assests/user.png'
const commentsData = [
  {
    id: 1,
    name: 'Arun Gupta',
    text: 'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    replies: [
      {
        name: 'Himanshu Gupta',
        text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Rohit Gupta',
        text: 'Risus nec feugiat in fermentum posuere urna nec tincidunt praesent',
        replies: [
          {
            name: 'Nancy Gupta',
            text: 'Aliquet eget sit amet tellus cras adipiscing enim.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Himanshu Gupta',
    text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    replies: [
      { name: 'Kapil Gupta', text: 'Quam adipiscing vitae proin sagittis nisl rhoncus mattis.' },
      {
        name: 'Nancy Gupta',
        text: 'Aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        name: 'Arun Gupta',
        text: 'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      },
    ],
  },
  {
    id: 3,
    name: 'Rohit Gupta',
    text: 'Risus nec feugiat in fermentum posuere urna nec tincidunt praesent',
  },
  {
    id: 4,
    name: 'Kapil Gupta',
    text: 'Quam adipiscing vitae proin sagittis nisl rhoncus mattis.',
  },
  {
    id: 5,
    name: 'Nancy Gupta',
    text: 'Aliquet eget sit amet tellus cras adipiscing enim.',
    replies: [
      {
        name: 'Himanshu Gupta',
        text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'Rohit Gupta',
        text: 'Risus nec feugiat in fermentum posuere urna nec tincidunt praesent',
      },
    ],
  },
]
const Comment = ({ data }) => {
  const { name, text, replies } = data
  return (
    <div className="flex mt-5 shadow-md p-2 bg-gray-100 rounded-2xl">
      <img alt="user" src={user} className="w-12 h-12" />
      <div className="px-3">
        <p className="font-bold text-xl">{name}</p>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  )
}
const CommentsList = ({ comments }) => {
  return comments?.map((comment) => (
    <div key={comment.id}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border-l border-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ))
}
const CommentContainer = () => {
  return (
    <div className="m-5 p-4">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentContainer

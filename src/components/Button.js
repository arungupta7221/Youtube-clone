import React from 'react'

const list = [
  'All',
  'Music',
  'Mixes',
  'Live',
  'Poadcast',
  'bodybuilding',
  'Fit',
  'Gym',
  'Health',
  'Sport',
  'Cricket',
  'IPL',
  'Comedy',
]
const Button = () => {
  return (
    <div>
      {list.map((item) => (
        <button key={item} className="px-5 py-2 m-2 bg-gray-200 rounded-xl">
          {item}
        </button>
      ))}
    </div>
  )
}

export default Button

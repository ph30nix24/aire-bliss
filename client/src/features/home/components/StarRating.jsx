import React from 'react'

// Star Rating Component
const StarRating = ({ rating }) => {
  const percentage = (rating / 5) * 100
  return (
    <div className='flex justify-center items-center gap-2'>
      <div className='relative inline-block text-xl tracking-widest'>
        <span className='text-gray-600'>★★★★★</span>
        <span
          className='absolute top-0 left-0 overflow-hidden text-yellow-400 whitespace-nowrap'
          style={{ width: `${percentage - 1}%` }}
        >
          ★★★★★
        </span>
      </div>
    </div>
  )
}
export default StarRating
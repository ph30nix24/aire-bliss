import React from 'react'

const CustomAlert = ({ message, status }) => {
    console.log("CustomAlert rendered with message:", message, "and status:", status);
  return (
    <div className={`fixed top-4 right-4 px-4 py-2 rounded shadow-lg text-white ${status === 'success' ? 'bg-green-500' : 'bg-red-500'} z-100`}>
      {message}
    </div>
  )
}

export default CustomAlert
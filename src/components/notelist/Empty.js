import React from 'react'
import {Link} from 'react-router-dom'

export default function Empty() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
        {/* edit */}
        <Link to = "/add">
         <div className='shadow-lg cursor-pointer bg-gray-200 rounded-full flex items-center justify-center w-16 h-16 mx-2 my-2 fixed bottom-5 right-2 z-10'>
         <img className = "h-10" src="https://img.icons8.com/office/80/000000/pencil-tip.png" alt = ""/>
        </div></Link>
      <p className='text-4xl text-gray-600'>Nothing Here!</p>
      <p className='text-2xl text-gray-600'>Add some Notes</p>
    </div>
  )
}

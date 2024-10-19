import React from 'react'
import './sniper.css';

function Sniper() {
  return (
    <div className='flex flex-col gap-6 justify-center items-center min-h-[500px]'>
      <div className="spinner"></div>
      <p className='text-white text-2xl font-bold'>Loading...</p>
    </div>
  )
}

export default Sniper;
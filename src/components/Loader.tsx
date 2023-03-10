import React from 'react'
import { AiTwotoneCheckCircle } from 'react-icons/ai';

function Loader() {
  return (
    <div className='flex items-center justify-center min-h-screen animate ping'>
      <div className='flex items-center justify-center min-h-screen animate-ping'>
        <AiTwotoneCheckCircle /> 
      </div>
      <div className='p-2'>Loading dogs</div>
    </div>
  )
}

export default Loader

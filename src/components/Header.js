import { SparklesIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Header() {
  return (
    <div className=' sticky top-0 bg-white w text-lg font-bold flex flex-row justify-between'>
        <p className='m-2'>Inicio</p>
        <div className=' rounded-full hover:bg-gray-200 h-fit p-2'>
        <SparklesIcon className='h-5 w-5 ' />
        </div>

    </div>
  )
}

export default Header
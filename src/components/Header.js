import { SparklesIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

function Header() {
  const [select, setSelect] = useState(0)
  return (
    <div className=' sticky top-0 bg-white   flex flex-col '>
        <div className='flex flex-row text-lg justify-between '>
          <p className='m-2 text-lg font-bold'>Inicio</p>
          <div className=' rounded-full hover:bg-gray-200 h-fit p-2'>
          <SparklesIcon className='h-5 w-5 hidden ' />
          </div>
        </div>
        <div className='mt-4 text-sm flex justify-evenly'>
            <div onClick={()=> setSelect(0)} className={`cursor-pointer p-2  ${select == 0 ? 'border-b-4 border-blue-500 font-semibold': 'border-b-0' }`}>
              <p>Para ti</p>
            </div>
            <div onClick={()=> setSelect(1)} className={`cursor-pointer p-2  ${select == 1 ? 'border-b-4 border-blue-500 font-semibold': 'border-b-0' }`}>
              <p>Siguiendo</p>
            </div>
        </div>
    </div>
  )
}

export default Header
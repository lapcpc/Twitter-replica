import React from 'react'
import { ChatBubbleLeftIcon, ArrowPathRoundedSquareIcon, HeartIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'
function Tuit({datos}) {
  return (
    <div className='flex flex-row space-x-2 border border-b-gray-200/75 pb-2'>
        <div className=' w-fit'>
            <img className='w-11 h-11 m-2 rounded-full' 
            src={datos.imgsrc} />
        </div>
        <div className=' mt-1 w-full space-y-4'>
            <div>
            <p className='text-sm'><b>{datos.nombre}</b> {datos.user}</p>
            <p>{datos.tuit}</p>
            </div>
            <div className=' text-gray-700 space-x-4 flex flex-row justify-between w-3/4'>
                <ChatBubbleLeftIcon className='w-4 h-4 cursor-pointer' />
                <ArrowPathRoundedSquareIcon className='w-4 h-4 cursor-pointer' />
                <HeartIcon className='w-4 h-4 cursor-pointer' />
                <ArrowUpTrayIcon className='w-4 h-4 cursor-pointer' />

            </div>
        </div>
    </div>
  )
}

export default Tuit
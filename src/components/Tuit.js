import React from 'react'
import { EllipsisHorizontalIcon, ChatBubbleLeftIcon, ArrowPathRoundedSquareIcon, HeartIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'
function Tuit({datos}) {
  return (
    <div className='flex flex-row space-x-2 border-y border-y-gray-200/75 pb-2'>
        <div className=' w-fit'>
            <img className='w-11 h-11 m-2 rounded-full' 
            src={datos.imgsrc} />
        </div>
        <div className=' mt-1 w-full space-y-4'>
            <div className='flex flex-col'>
            <div className='flex justify-between'>
            <div>
              <p className='text-sm'><b>{datos.nombre}</b> <span className='text-light text-gray-500'>{datos.user} - 2h</span></p>
              <p className='text-base font-light'>{datos.tuit}</p>
            </div>
            <EllipsisHorizontalIcon className='w-6 h-6 mt-2 mr-3'/>
            </div>
            <img className='w-[95%] rounded-xl mt-3' src={datos.img} />
            </div>
            
            <div className=' text-gray-500 space-x-4 flex flex-row justify-between w-3/4'>
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
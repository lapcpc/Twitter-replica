import React from 'react'
import { PhotoIcon, GifIcon, ListBulletIcon, FaceSmileIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
function TuitForm() {
  return (
    <div className='flex flex-row   space-x-2  border-t border-b-gray-200/50 pb-2'>
        <div className='min-w-fit my-2'>
            <img 
                className=' m-2 rounded-full  h-10 w-10'
                src="https://cdn-icons-png.flaticon.com/512/8847/8847523.png" />

        </div>
      
        <div className='w-full '>
            <div className='py-5 '>
                <input className='mt-1 text-lg outline-none' placeholder='¿Qué esta pasando?'/>
            </div>
            <div className='flex flex-row justify-between mt-3 '>
                <div className='flex flex-row space-x-4 my-1 ml-1 text-sky-600'>
                    <PhotoIcon className='w-4.5 h-5 cursor-pointer' />
                    <GifIcon className='w-4.5 h-5 cursor-pointer' />
                    <ListBulletIcon className='w-4.5 h-5 cursor-pointer' />
                    <FaceSmileIcon className='w-4.5 h-5 cursor-pointer' />
                    <CalendarIcon className='w-4.5 h-5 cursor-pointer' />
                    <MapPinIcon className='w-4.5 h-5 cursor-pointer' />
                </div>
                <button className='bg-sky-300 mr-4 px-4 py-1 text-xss text-white font-medium rounded-full'>Twittear</button>
            </div>
            

        </div>
    </div>
  )
}

export default TuitForm
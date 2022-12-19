import React from 'react'
import { PhotoIcon, GifIcon, ListBulletIcon, FaceSmileIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
function TuitForm() {
  return (
    <div className='flex flex-row   space-x-2   border border-b-gray-200/75 pb-2'>
        <div className='min-w-fit'>
            <img 
                className=' m-2 rounded-full h-11 w-11'
                src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />

        </div>
        <div className='w-full'>
            <div className='py-5 '>
            <input className=' text-lg' placeholder='¿Qué esta pasando?'/>
            </div>
            <div className='flex flex-row justify-between '>
                <div className='flex flex-row space-x-4 my-1 ml-1 text-sky-600'>
                    <PhotoIcon className='w-4.5 h-5 cursor-pointer' />
                    <GifIcon className='w-4.5 h-5 cursor-pointer' />
                    <ListBulletIcon className='w-4.5 h-5 cursor-pointer' />
                    <FaceSmileIcon className='w-4.5 h-5 cursor-pointer' />
                    <CalendarIcon className='w-4.5 h-5 cursor-pointer' />
                    <MapPinIcon className='w-4.5 h-5 cursor-pointer' />
                </div>
                <button className='bg-sky-300 mr-4 px-4 py-2 text-sm text-white font-medium rounded-full'>Twittear</button>
            </div>
            

        </div>
    </div>
  )
}

export default TuitForm
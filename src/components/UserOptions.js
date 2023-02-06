import React from 'react'
import {EllipsisHorizontalIcon} from '@heroicons/react/24/outline'
function UserOptions() {
  return (
    <div className='flex cursor-pointer space-x-10 hover:bg-gray-200 rounded-full xl:p-3 w-full'>
        <div className='flex space-x-2 w-full'>
        <img className=' object-contain w-10 h-10  rounded-full' src="https://cdn-icons-png.flaticon.com/512/8847/8847523.png" />
        <div className='hidden  xl:flex flex-col  text-sm'>
            <p>
                <b> Luis Pinot </b>
            </p>
            <p>@lapcpc</p>
        </div>
        
        </div>
        <EllipsisHorizontalIcon className='hidden xl:inline w-6 h-6 mt-2'/>
    </div>
  )
}

export default UserOptions
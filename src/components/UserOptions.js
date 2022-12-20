import React from 'react'
import {EllipsisHorizontalIcon} from '@heroicons/react/24/outline'
function UserOptions() {
  return (
    <div className='flex justify-between cursor-pointer hover:bg-gray-200 rounded-full xl:p-3 xl:pr-6'>
        <div className='flex space-x-3'>
        <img className=' object-contain w-10 h-10  rounded-full' src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />
        <div className='hidden xl:inline flex flex-col  text-sm'>
            <p>
                <b> Luis Pinot </b>
            </p>
            <p>
                @lapcpc
            </p>

        </div>
        
        </div>
        <EllipsisHorizontalIcon className='hidden xl:inline w-6 h-6 mt-2'/>
    </div>
  )
}

export default UserOptions
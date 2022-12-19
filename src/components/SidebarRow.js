import React from 'react'

function SidebarRow({Icon, Title}) {
  return (
    <div className=' max-w-fit space-x-4 flex cursor-pointer hover:bg-gray-200 p-2 px-3 pr-6 rounded-full'>
      <Icon className='w-7 h-7' />
      <p className='hidden lg:inline text-lg  '>{Title}</p> 
        
    </div>
  )
}

export default SidebarRow
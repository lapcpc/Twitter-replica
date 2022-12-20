import React from 'react'

function SidebarRow({Icon, Title}) {
  return (
    <div className=' max-w-fit space-x-4 flex cursor-pointer hover:bg-gray-200 pt-2 xl:px-3 xl:pr-6 rounded-full'>
      <Icon className=' w-7 h-7' />
      <p className='hidden xl:inline text-xl  '>{Title}</p> 
        
    </div>
  )
}

export default SidebarRow
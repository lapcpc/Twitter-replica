import React from 'react'

function Modal({children}) {
  return (
    <div className='h-screen w-screen  bg-gray-500 opacity-25 z-50'>
        <div className='w-fit h-fit mx-auto items-center bg-white'>
            {children}
        </div>
    </div>
  )
}

export default Modal
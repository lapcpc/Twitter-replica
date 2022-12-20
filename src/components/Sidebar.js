import React from 'react'
import {HashtagIcon, HomeIcon, BellIcon, EnvelopeIcon, BookmarkIcon, ClipboardDocumentIcon, UserIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'
import UserOptions from './UserOptions'

function Sidebar() {
  return (
    <div className='sticky top-0 col-span-1 xl:col-span-2  pt-1 lg:ml-3 justify-between flex flex-col h-screen'>
      <div className=' space-y-3  '>
        <div className='p-2 xl:ml-1 hover:bg-sky-100 rounded-full  w-fit'>
        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
        className='w-7 h-7' />
        </div>
        <SidebarRow Icon={HomeIcon} Title="Inicio" />
        <SidebarRow Icon={HashtagIcon} Title="Explorar" />
        <SidebarRow Icon={BellIcon} Title="Notificaciones" />
        <SidebarRow Icon={EnvelopeIcon} Title="Mensajes" />
        <SidebarRow Icon={BookmarkIcon} Title="Guardados" />
        <SidebarRow Icon={ClipboardDocumentIcon} Title="Listas" />
        <SidebarRow Icon={UserIcon} Title="Perfil" />
        <SidebarRow Icon={EllipsisHorizontalCircleIcon} Title="Mas opciones" />
        <button className='text-center    bg-sky-500 hover:bg-sky-600 rounded-full text-white p-1 px-3 xl:py-3 font-medium text-lg w-fit xl:w-5/6'> <p className='hidden xl:inline'>Twittear</p> <p className='inline xl:hidden p-0'>+</p> </button>
        
      </div>
      <div className=' pb-5'>
      <UserOptions />
      </div>
    </div>
  )
}

export default Sidebar
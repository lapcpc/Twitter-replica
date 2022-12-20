import { MagnifyingGlassIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Widgets() {
  return (
    <div className='col-span-3 hidden lg:inline w-[86%] ml-12 mt-2 space-y-4'>
        {/* Barra de busqueda */}
        <div className='bg-gray-100 flex flex-row rounded-full px-4 py-2  space-x-2'>
            <MagnifyingGlassIcon 
            className='mt-0.5 w-5 h-5 text-gray-500' />
            <input className=' bg-gray-100 placeholder:text-gray-500' placeholder='Buscar en Twitter' />

        </div>
        {/* Que esta pasado */}
        <div className='w-full  bg-gray-100 space-y-2 p-2 rounded-2xl'>
        <h3 className='p-2 text-xl font-bold'>Qué esta pasando</h3>           
            <div className='p-2 text-sm'>
                
                <b>#TuSleecionIdealSabrias</b>
                <p>Disfruta los partidos del mundial con tu selección ideal Sabritas®</p>     
            </div>
            <div className='p-2 text-sm flex flex-row justify-between'>
                <div>
                    <p className='text-xs'>Tendecia en Mexico</p>   
                    <b>Cristiano</b>
                    <p>El mejor jugador del mundo</p>     
                    <p className=' text-xs'>42 mil Tweets</p>
                </div>
                <EllipsisHorizontalIcon className='w-6 h-6' />
            </div>
            <div className='p-2 text-sm  flex flex-row justify-between'>
                <div>
                    <p className='text-xs'>Tendecia en Mexico</p>
                    <b>Stephen Curry</b>
                    <p>La leyenda en persona</p> 
                    <p className=' text-xs'>100 mil Tweets</p>    
                </div>
                <EllipsisHorizontalIcon className='w-6 h-6' />
            </div>
            <h1 className='p-5 text-sky-500 cursor-pointer'>Mostrar mas</h1>
        </div>
        
        {/* A quien seguir */}
        <div className='w-full  bg-gray-100 space-y-2 p-2 rounded-2xl'>
        <h3 className='p-2 text-xl font-bold'>A quien seguir</h3>           
            
            <div className='p-2 text-sm flex flex-row justify-between'>
            <div className='flex justify-between cursor-pointer w-full hover:bg-gray-200  p-3 pr-6'>
            <div className='flex space-x-3'>
                <img className=' object-contain w-10 h-10  rounded-full' src="https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg" />
                <div className='hidden lg:inline flex flex-col  text-sm'>
                    <p>
                        <b> Luis Pinot </b>
                    </p>
                    <p>
                        @lapcpc
                    </p>

                </div>
                
                </div>
                <p className=' font-bold h-fit py-1.5 px-4 rounded-full  hover:bg-black/75 bg-black text-white'>Seguir</p>
            
            </div>  
            
           
        </div>
        <h1 className='p-5 text-sky-500 cursor-pointer'>Mostrar mas</h1>
        </div>
    </div>
  )
}

export default Widgets
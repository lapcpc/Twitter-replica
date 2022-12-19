import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Widgets() {
  return (
    <div className='w-full col-span-2 ml-6 mt-2 space-y-2'>
        {/* Barra de busqueda */}
        <div className='bg-gray-200 flex flex-row rounded-full px-4 py-2  space-x-2'>
            <MagnifyingGlassIcon 
            className='mt-0.5 w-5 h-5 text-gray-900' />
            <input className=' bg-gray-200 placeholder:text-gray-900' placeholder='Buscar en Twitter' />

        </div>
        {/* Que esta pasado */}
        <div className='w-full bg-gray-100 space-y-2 p-2 rounded-2xl'>
        <h3 className='p-2 text-lg font-bold'>Qué esta pasando</h3>           
            <div className='p-2 text-sm'>
                
                <b>#TuSleecionIdealSabrias</b>
                <p>Disfruta los partidos del mundial con tu selección ideal Sabritas®</p>     
            </div>
            <div className='p-2 text-sm'>
                
                <b>Cristiano</b>
                <p>El mejor jugador del mundo</p>     
                <p className=' text-xs'>42 mil Tweets</p>
            </div>
            <div className='p-2 text-sm'>
                
                <b>Stephen Curry</b>
                <p>La leyenda en persona</p> 
                <p className=' text-xs'>100 mil Tweets</p>    
            </div>
            <h1 className='p-5 text-sky-500 cursor-pointer'>Mostrar mas</h1>
        </div>
        
        {/* A quien seguir */}
        
    </div>
  )
}

export default Widgets
import React from 'react'
import Header from './Header'
import Tuit from './Tuit'
import TuitForm from './TuitForm'

function Feed() {
    const tuits= [{
        imgsrc: "https://pbs.twimg.com/profile_images/1561604184289558529/Bq62M5zI_400x400.jpg",
        nombre: "Luis Pinot",
        user: "@lapcpc",
        tuit: "Esto es un tuit",
    },
    
    
    ]
  return (
    <div className=' col-span-8 md:col-span-7 lg:col-span-5 xl:col-span-4 border border-x-gray-200/75  '>
        <Header />

        <TuitForm />
        <div className='mt-2'> 
            {tuits.map((tuit)=>(
                <Tuit datos={tuit} />
                
            ))}
        </div>
    </div>
  )
}

export default Feed
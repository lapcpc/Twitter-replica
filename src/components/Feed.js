import React from 'react'
import Header from './Header'
import Tuit from './Tuit'
import TuitForm from './TuitForm'

function Feed() {
    const tuits= [{
        imgsrc: "https://cdn-icons-png.flaticon.com/512/8847/8847523.png",
        nombre: "Luis Pinot",
        user: "@lapcpc",
        tuit: "Esto es un tuit",
        img: "https://pbs.twimg.com/media/FoPUv9PXEAMz2ij?format=jpg&name=small"
    },
    
    
    ]
  return (
    <div className='xl:ml-5 col-span-8 md:col-span-7 lg:col-span-5 xl:col-span-4 border-x border-x-gray-200/50  '>
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
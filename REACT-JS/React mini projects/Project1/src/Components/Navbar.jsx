import React from 'react'

function Navbar({data}) {
  return (
    <div className='pt-10 w-full px-20 flex justify-between items-center'>
        <h3 className='text-black-600 text-4xl '>suffle music</h3>
       <div className="sticky-0 px-4 text-white flex p-2 gap-3 text-sm rounded-md bg-red-500">
        <h4>Favourites</h4>
        <h4>{data.filter(item=> item.added).length}</h4>
        
       </div>
    </div>
          
  )
}

export default Navbar
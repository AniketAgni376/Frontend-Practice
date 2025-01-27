import React from 'react'

function Card({data, handleClick, index}) {
  const {image, artist, added, title} = data;
  return (
    <div className='w-60 bg-zinc-100 gap-4 flex p-4 pb-8 relative rounded-md mt-10'>
      <div className="w-20 h-20 bg-red-600 overflow-hidden rounded-md">
        <img className='w-full h-full origin-cover' src={image} alt="" />
      </div>
      <div className="">
        <h3 className='text-xl leading-none font-semibold'>{title}</h3>
        <h6 className='text-sm'>{artist}</h6>
      </div>
    <button onClick={()=>handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${added === false ? "bg-orange-600" : "bg-teal-600"} bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] absolute text-white text-xs rounded-full`}>
   {added === false ? "Add to Favourites": "Added"} </button>
    </div>
  )
}

export default Card
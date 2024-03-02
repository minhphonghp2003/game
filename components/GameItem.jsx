import React from 'react'

function GameItem({ id, name, image }) {
  return (
    <a href={`/game/${id}`} className='hover:cursor-pointer  w-[80%]'>
      <img className='hover:opacity-40 hover:bg-[#000] duration-1000 rounded-2xl m-auto drop-shadow-2xl' src={image} />
      <p className='text-center font-bold py-2'>{name}</p>
    </a>
  )
}

export default GameItem
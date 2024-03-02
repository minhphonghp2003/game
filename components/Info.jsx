import React from 'react'
import Divider from './Divider'

function Info({ author }) {
  return (
    <div className='p-4 font-sans'>
      <p className='font-400 text-[22px] p-4'>Thông tin game <br></br>
      </p>
      <Divider />

      <div className='flex justify-between w-[80%] m-auto font-400 font-sans leading-[36px]'>
        <p className=''>
          🎗️Loại:
        </p>
        <p className=''>
          Game búp bê
        </p>
      </div>

      <div className='flex justify-between w-[80%] m-auto font-400 font-sans leading-[36px]'>
        <p className=''>
          🗓️Phát hành:
        </p>
        <p className=''>

          22/02/2024
        </p>
      </div>
      <div className='flex justify-between w-[80%] m-auto font-400 font-sans leading-[36px]'>
        <p className=''>
          🧑‍💻Phát triển:
        </p>
        <p className='text-[#007bff]'>
          {author}
        </p>
      </div>

    </div>
  )
}

export default Info
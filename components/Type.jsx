import React from 'react'
import Divider from './Divider'

function Type({ types }) {
  return (
    <div className='p-8 font-sans'>
      <p className='font-400 text-[22px] p-4'>Thể loại <br></br>
      </p>
      <Divider />
      <div className='flex gap-3 flex-wrap'>
        {types && types.map(t => {
          return <span className="bg-[#0674ec12] text-[#0674ec] text-xs font-medium me-2 px-2.5 py-1.5 rounded-full ">{t}</span>
        })}
      </div>

    </div>
  )
}

export default Type
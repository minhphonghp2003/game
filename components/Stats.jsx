import React from 'react'
import Divider from './Divider'

function Detail({ name, value }) {
  return (
    <div className='flex justify-between w-80% m-auto font-[400] text-[1.1rem]'>
      <p>
        {name}
      </p>
      <p>{value}</p>
    </div>
  )

}

function Stats() {
  return (
    <div className='p-8'>
      <Detail name="👁️Lượt xem" value="4321" />
      <Divider />
      <Detail name="🖱️Lượt tải" value="1234" />
      <Divider />
      <Detail name="⭐⭐⭐⭐⭐" value="2341 đánh giá" />
    </div>
  )
}

export default Stats
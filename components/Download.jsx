import React from 'react'
import Divider from './Divider'

function Download({ url, name }) {
  return (
    <div className='p-8 font-sans'>
      <p className='font-400 text-[22px] p-4'>Tải game ngay đi <br></br>
        <span className='text-[1rem] text-gray-400'>

          Game không có vi rút đâu đừng sợ 😄
        </span>
      </p>
      <Divider />
      <p className='font-400 leading-[30px] text-black'>
        Nếu thấy game <span className='font-bold'>  {name} </span>hay thì nhớ <span className='font-bold'> ủng hộ mình </span> thôi nhé các bạn 😘😘
      </p>
      <a href="https://www.buymeacoffee.com/minhphonghh">

        <button className="bg-yellow-500 font-[cursive] hover:bg-yellow-700 text-white font-bold py-2 px-4 w-full rounded my-2">
          🍵Buy me a coffee
        </button>
      </a>
      <a href={url}>
        <button className="bg-red-500 font-[cursive] hover:bg-red-700 text-white font-bold py-2 px-4 w-full rounded my-2">
         🖱️ Tải liền chứ sợ gì
        </button>
      </a>

    </div>
  )
}

export default Download
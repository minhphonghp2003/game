"use client"
import React, { useState } from 'react'
import Box from './Box'

function ChatBox() {
    return (
        <div className='h-full flex flex-col justify-between w-[25rem] px-4 '>

            <div className='h-[80%] overflow-y-scroll'>
                <p className=''>Name:
                    <span className='text-black'>
                        asdjj jkla asdklfd asfklds aj23  4k3lj lk3jkl234 fjdsalkfjlaksdf
                    </span>
                </p>
                <p className=''>Name:
                    <span className='text-black'>
                        asdjj jkla asdklfd asfklds aj23  4k3lj lk3jkl234 fjdsalkfjlaksdf
                    </span>
                </p>
                <p className=''>Name:
                    <span className='text-black'>
                        asdjj jkla asdklfd asfklds aj23  4k3lj lk3jkl234 fjdsalkfjlaksdf
                    </span>
                </p>
                <p className=''>Name:
                    <span className='text-black'>
                        asdjj jkla asdklfd asfklds aj23  4k3lj lk3jkl234 fjdsalkfjlaksdf
                    </span>
                </p>
                <p className=''>Name:
                    <span className='text-black'>
                        asdjj jkla asdklfd asfklds aj23  4k3lj lk3jkl234 fjdsalkfjlaksdf
                    </span>
                </p>
                <p className=''>Name:
                    <span className='text-black'>
                        asdjj jkla asdklfd asfklds aj23  4k3lj lk3jkl234 fjdsalkfjlaksdf
                    </span>
                </p>
                <p className=''>Name:
                    <span className='text-black'>
                        asdjj jkla asdklfd asfklds aj23  4k3lj lk3jkl234 fjdsalkfjlaksdf
                    </span>
                </p>
                <p className=''>Name:
                    <span className='text-black'>
                        asdjj jkla asdklfd asfklds aj23  4k3lj lk3jkl234 fjdsalkfjlaksdf
                    </span>
                </p>
                <p className=''>Name:
                    <span className='text-black'>
                        asdjj jkla asdklfd asfklds aj23  4k3lj lk3jkl234 fjdsalkfjlaksdf
                    </span>
                </p>

            </div>
            <div className='sticky bottom-0 gap-1 flex '>
                <input type="text" class="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-[5rem]" placeholder="Tên*" required />
                <input type="text" class="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5" placeholder="Tin nhắn" required />
            </div>
        </div>
    )
}

function Chat() {
    let [isCollapsed, setCollapsed] = useState(true)
    return (
        <div className='fixed text-red-700 bottom-0 right-4'>
            <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  font-medium rounded-lg text-sm px-20 py-2.5 text-center me-2 mb-2 w-full duration-700" onClick={() => { setCollapsed(!isCollapsed) }}>🗨️Chat</button>
            <Box>
                <div className={`${isCollapsed ? "h-0" : "h-[50vh] "} duration-1000 `}>
                    <ChatBox />
                </div>
            </Box>

        </div>
    )
}

export default Chat
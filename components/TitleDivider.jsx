import React from 'react'

function TitleDivider({ title }) {
    return (
        <div className="relative flex py-[5rem] items-center w-[70%] m-auto">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4  text-xl font-bold text-red-500">
                {title}
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
        </div>
    )
}

export default TitleDivider 
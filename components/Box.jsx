import React from 'react'

function Box({ children }) {
    return (
        <div className="col-span-2 shadow-2xl rounded-xl bg-white">
          {children} 
        </div>
    )
}

export default Box
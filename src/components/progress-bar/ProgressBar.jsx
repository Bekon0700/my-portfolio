import React from 'react'

const ProgressBar = ({ value, color, title }) => {
    console.log(color)
    return (
        <div className='text-lg font-medium text-green-200'>
            <p className=''>{title}</p>
            <progress className={`progress progress-${color} h-1 w-full`} value={value} max="100"></progress>
        </div>
    )
}

export default ProgressBar
import React, { useState } from 'react'
import './Style.css'
const JellyText = ({string}) => {
    
    const [hover, setHover] = useState(true)
    const mouseOver = () => {
        setHover(true)
    }
    const MouseOut = () => {
        setTimeout(() => {
            setHover(false)
        }, 700);
    }
    return (
        <div>
            {
                string == ' ' ?
                <p className='px-1 md:px-2'></p>
                :
                <p onMouseOver={mouseOver} onMouseOut={MouseOut} className={hover ? 'text-gray-300 text-3xl md:text-4xl lg:text-7xl single' : 'text-gray-300 text-3xl md:text-4xl lg:text-7xl'}>{string}</p>
            }
        </div>
    )
}

export default JellyText
import React from 'react'
import { Link } from 'react-router-dom'

const Work = ({data}) => {
    const {title_para, name, features, img_url, img_alt, link} = data
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8 w-11/12 mx-auto lg:py-0 border lg:border-none border-purple-200 p-3 lg:p-0 rounded-md'>
            <div className='flex flex-col gap-4 text-gray-400 text-base lg:text-lg'>
                <div className="tooltip tooltip-top text-left" data-tip={link}>
                    <Link onClick={() => window.open(`${link}`, "_blank")}><p className='text-3xl lg:text-4xl font-bold text-emerald-600'>{name}</p></Link>
                </div>
                <p className='font-medium'>{title_para}</p>
                <div className='flex flex-col gap-2 mt-6'>
                    <p className='text-2xl font-semibold'>Key Feature of this project</p>
                    <ul className='list-disc ml-5 text-green-400'>
                        {
                            features.map((el, id) => <li key={id}>{el}</li>)
                        }
                    </ul>
                </div>
            </div>
            <img onClick={() => window.open(`${link}`, "_blank")} src={img_url} alt={img_alt} className='h-64 lg:h-80 cursor-pointer' />
        </div>
    )
}

export default Work
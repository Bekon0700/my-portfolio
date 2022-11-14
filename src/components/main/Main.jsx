import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
const Main = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between'>
                <div className='lg:flex-none lg:fixed lg:top-0 lg:left-0 lg:w-44 bg-[#181818]'>
                    <Header />
                </div>
                <div className='lg:grow lg:ml-52'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Main
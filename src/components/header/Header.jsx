import React, { useState } from 'react'

import { GiCrossMark, GiHamburgerMenu } from 'react-icons/gi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  const [navIconToggle, setNavIconToggle] = useState(true)

  const navBtn = () => {
    setNavIconToggle(!navIconToggle)
  }


  return (
    <div className='w-11/12 lg:w-full mx-auto py-8 flex lg:flex-col justify-between bg-gray-900 lg:h-screen'>
      <p className='text-2xl font-bold text-green-500 text-center'>My-Portfolio_</p>
      <div className=' text-green-300 font-semibold text-lg hidden lg:flex lg:flex-col justify-between items-center gap-8'>
        <Link to='/'>Home</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='hidden lg:flex gap-4 justify-center items-center text-2xl text-green-300'>
        <AiFillGithub />
        <AiFillLinkedin />
      </div>
      {/* mobile view navbar */}
      <div className={navIconToggle ? `absolute top-0 -left-full w-2/3 h-screen bg-gray-900 ease-in duration-700 z-30` : `absolute top-0 left-0 w-full md:w-1/2 h-screen bg-gray-900 lg:hidden ease-in duration-700 z-30`}>
        <div className='flex justify-between items-center w-11/12 mx-auto'>
          <p className='text-2xl font-bold text-green-500 flex justify-center items-center py-8'>My-Portfolio_</p>
          <GiCrossMark onClick={navBtn} className='text-2xl text-white' />
        </div>
        <div className='text-green-300 font-semibold text-xl flex flex-col gap-8 pt-8 items-center'>
          <Link onClick={navBtn} to='/'>Home</Link>
          <Link onClick={navBtn} to='/skills'>Skills</Link>
          <Link onClick={navBtn} to='/about'>About</Link>
          <Link onClick={navBtn} to='/contact'>Contact</Link>
        </div>
        <div className='flex gap-4 pt-48 justify-center items-center text-2xl text-green-300'>
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>
      <div className='block lg:hidden'>
        <GiHamburgerMenu onClick={navBtn} className='text-2xl text-white' />
      </div>
    </div>
  )
}

export default Header
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
    <div className='w-11/12 mx-auto py-8 flex lg:flex-col justify-between bg-[#181818] lg:h-screen'>
      <p className='text-2xl font-bold text-green-500 text-center'>My-Portfolio_</p>
      <div className=' text-[#909096] text-lg hidden lg:flex lg:flex-col justify-between items-center'>
        <Link to='/' className='w-full text-center py-3 border-b-2 border-[#282828]' >Home</Link>
        <Link to='/works' className='w-full text-center py-3 border-b-2 border-[#282828]'>Works</Link>
        <Link to='/skills' className='w-full text-center py-3 border-b-2 border-[#282828]'>Skills</Link>
        <Link to='/about' className='w-full text-center py-3 border-b-2 border-[#282828]'>About</Link>
        <Link to='/contact' className='w-full text-center py-3 border-b-2 border-[#282828]'>Contact</Link>
      </div>
      <div className='hidden lg:flex gap-4 justify-center items-center text-2xl text-green-300'>
        <AiFillGithub onClick={() => window.open(`https://github.com/Bekon0700`, "_blank")} className='cursor-pointer' />
        <AiFillLinkedin onClick={() => window.open(`https://www.linkedin.com/in/bekon0700/`, "_blank")} className='cursor-pointer' />
      </div>
      {/* mobile view navbar */}
      <div className={navIconToggle ? `absolute top-0 -left-full w-2/3 h-screen bg-[#181818] ease-in duration-700 z-30` : `fixed top-0 left-0 w-full md:w-1/2 h-screen bg-[#181818] lg:hidden ease-in duration-700 z-30`}>
        <div className='flex justify-between items-center w-11/12 mx-auto'>
          <p className='text-2xl font-bold text-green-500 flex justify-center items-center py-8'>My-Portfolio_</p>
          <GiCrossMark onClick={navBtn} className='text-2xl text-white' />
        </div>
        <div className='text-green-300 font-semibold text-xl flex flex-col gap-0 pt-8 items-center'>
          <Link onClick={navBtn} className='w-full text-center py-3 border-b-2 border-[#282828]' to='/'>Home</Link>
          <Link onClick={navBtn} className='w-full text-center py-3 border-b-2 border-[#282828]' to='/works'>Works</Link>
          <Link onClick={navBtn} className='w-full text-center py-3 border-b-2 border-[#282828]' to='/skills'>Skills</Link>
          <Link onClick={navBtn} className='w-full text-center py-3 border-b-2 border-[#282828]' to='/about'>About</Link>
          <Link onClick={navBtn} className='w-full text-center py-3 border-b-2 border-[#282828]' to='/contact'>Contact</Link>
        </div>
        <div className='flex gap-4 pt-48 justify-center items-center text-2xl text-green-300'>
          <AiFillGithub onClick={() => window.open(`https://github.com/Bekon0700`, "_blank")} className='cursor-pointer' />
          <AiFillLinkedin onClick={() => window.open(`https://www.linkedin.com/in/bekon0700/`, "_blank")} className='cursor-pointer' />
        </div>
      </div>
      <div className='block lg:hidden'>
        <GiHamburgerMenu onClick={navBtn} className='text-2xl text-white' />
      </div>
    </div>
  )
}

export default Header
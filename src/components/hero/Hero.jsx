import React, { useEffect } from 'react'
import { useState } from 'react';
import Typed from 'react-typed';
import JellyText from '../../utils/jelly-text/JellyText';

const Hero = () => {
  const hi = `Hi,`.split('')
  const name = `I'm Emdadul,`.split('')
  const dev = `web developer`.split('')
  let i = 0
  return (
    <div className='py-24' >
      <div className='flex flex-col justify-center'>
        <div className='flex '>
          {
            hi.map(el => <JellyText key={i++} string={el} />)
          }
        </div>
        <div className='flex ' >
          {
            name.map(el => <JellyText key={i++} string={el} />)
          }
        </div>
        <div className='flex '>
          {
            dev.map(el => <JellyText key={i++} string={el} />)
          }
        </div>
        <div className='flex py-4'>
          <Typed
            className='text-gray-600 text-lg md:text-xl lg:text-2xl capitalize'
            strings={['Frontend Developer', 'Backend Developer']}
            typeSpeed={100}
            backSpeed={100}
            loop >
          </Typed>
        </div>
      </div>
    </div>
  )
}

export default Hero
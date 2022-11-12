import React from 'react'
import Hero from '../../components/hero/Hero'
import Myself from '../../components/myself/Myself'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <Hero />
        <Myself />
    </div>
  )
}

export default Home
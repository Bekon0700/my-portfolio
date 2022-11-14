import React from 'react'
import Hero from '../../components/hero/Hero'
import Myself from '../../components/myself/Myself'
import ContactMe from '../contact-me/ContactMe'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <Hero />
        <Myself />
        <ContactMe />
    </div>
  )
}

export default Home
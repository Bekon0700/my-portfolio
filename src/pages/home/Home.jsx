import React from 'react'
import Hero from '../../components/hero/Hero'
import Myself from '../../components/myself/Myself'
import ContactMe from '../contact-me/ContactMe'
import Skills from '../skills/Skills'

const Home = () => {
  return (
    <div className='my-12'>
        <Hero />
        <Skills home={true}/>
        <Myself home={true}/>
        <ContactMe home={true} />
    </div>
  )
}

export default Home
import React from 'react'
import Hero from './hero/Hero'
import Recent from './recent/Recent'
import Header from './common/Header'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero />
      <Recent />
    </>
  )
}

export default Home

import React from 'react'
import Navbar from './navbar/Navbar'
import HeroImage from './heroComponent/HeroImage'
import CenterFlex from './flexdiv/CenterFlex'
import HeroText from './heroComponent/HeroText'

const HomePage = () => {
  return (
    <div className='relative bg-black overflow-x-hidden overflow-y-hidden'>
        <Navbar />
        <HeroImage />
        <CenterFlex />
        <HeroText />
    </div>
  )
}

export default HomePage
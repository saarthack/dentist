import React from 'react'
import HomePage from './components/homepage/HomePage'
import Page2 from './components/page2/Page2'
import Footer from './components/footer/Footer'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div>
      <HomePage />
      <Page2 />
      <Footer />
    </div>
  )
}

export default App
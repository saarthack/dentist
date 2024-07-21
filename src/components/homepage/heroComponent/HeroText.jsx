import { motion, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'


const HeroText = () => {

  const { scrollY } = useScroll()
  const [direction, setDirection] = useState(1)

  const handleScroll = () => {
    const current = scrollY.get() - scrollY.getPrevious()
    
    // agar sidha scroll hua to value 1
    // agar ulta scroll hua to value -1

    if(current>0){
      setDirection(1)
    }else{
      setDirection(-1)
    }
  }

  useEffect(() => {

    scrollY.on("change", handleScroll)

  }, [scrollY])





  return (
    <motion.div
      className='relative flex'

      initial={{
        x: -3300
      }}
      animate={{
        x: direction>0?-6600:0
      }}
      transition={{
        duration: 10,
        ease: 'linear',
        repeat: Infinity
      }}


    >
      <h1 className='text-[15vw] font-light whitespace-nowrap text-white'>- Dennis Snellenberg</h1>
      <h1 className='text-[15vw] font-light whitespace-nowrap text-white'>- Dennis Snellenberg</h1>
      <h1 className='text-[15vw] font-light whitespace-nowrap text-white'>- Dennis Snellenberg</h1>
      <h1 className='text-[15vw] font-light whitespace-nowrap text-white'>- Dennis Snellenberg</h1>
    </motion.div>
  )
}

export default HeroText
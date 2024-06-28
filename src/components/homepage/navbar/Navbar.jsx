import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

const Navbar = () => {
  return (
    <div className='text-white relative z-10 flex justify-between items-center py-9 px-20'>
        <NavLeft />
        <NavRight />
    </div>
  )
}

export default Navbar
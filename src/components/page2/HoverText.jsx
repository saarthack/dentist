import React from 'react'

const HoverText = (props) => {
    
    const mouseEntered = ()=>{
        props.setImageScroll(props.translate)
    }

    return (
        <div onMouseEnter={mouseEntered} id="hoveredText" className='hover:px-40 hover:text-gray-400 p-20 flex justify-between relative items-center border-t-2'>
            <div id='overlay' className='h-full w-full z-40  absolute top-0 left-0'></div>
            <h1 className='text-9xl capitalize'>{props.h1}</h1>
            <p className='text-lg'>Interaction and Development</p>
        </div>
    )
}

export default HoverText
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import HoverText from './HoverText'

const TextDiv = () => {
    const hoverRef = useRef(null)
    const overlayRef = useRef(null)

    const textArray = ["TWICE","The Damai","FABRIC","Antakshiri"]

    const [imageScroll, setImageScroll] = useState(0)

    const mouseMoving = (e) => {
        hoverRef.current.style.left = (e.clientX - overlayRef.current.getBoundingClientRect().x) + "px"
        hoverRef.current.style.top = (e.clientY - overlayRef.current.getBoundingClientRect().y) + "px"
    }
    const mouseEntering = () => {
        hoverRef.current.style.transform = `translate(-50%,-50%) scale(1)`
    }
    const mouseLeaving = () => {
        hoverRef.current.style.transform = `translate(-50%,-50%) scale(0)`
    }


    return (
        <div
            ref={overlayRef}
            onMouseMove={(e) => {
                mouseMoving(e)
            }}
            onMouseEnter={() => {
                mouseEntering()
            }}
            onMouseLeave={() => {
                mouseLeaving()
            }}
            className='relative'
        >

            <div ref={hoverRef} id='imagediv' className='h-[20vw] w-[20vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden absolute z-30'>
                <motion.div 
                className='h-full w-full'
                animate={{
                    transform:`translateY(-${imageScroll}%)`
                }}
                transition={{
                    duration:0.3,
                    ease:'easeOut'
                }}
                >
                    <img className='h-full w-full object-cover object-center' src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice-810x810-crop-q72.jpg" alt="" />
                    <img className='h-full w-full object-cover object-center' src="https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2-810x810-crop-q72.jpg" alt="" />
                    <img className='h-full w-full object-cover object-center' src="https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray-810x810-crop-q72.jpg" alt="" />
                    <img className='h-full w-full object-cover object-center' src="https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk-810x810-crop-q72.jpg" alt="" />
                </motion.div>

            </div>
            <div>
                {
                    textArray.map(function(elem,idx){

                        return <HoverText h1={elem} key={idx} setImageScroll={setImageScroll} translate={idx*100}  />
                    })
                }
                
            </div>
        </div>
    )
}

export default TextDiv
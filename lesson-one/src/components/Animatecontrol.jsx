import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'


function Animatecontrol() {
    const controls = useAnimationControls()
    const handleClick =()=>{
        //Do something here...

        controls.start("flip")
        controls.start("trasnition")
    }
  return (
    <div className='grid place-content-center gap-0 h-screen '>
        <button className='border-4 bg-cyan-300' onClick ={handleClick}>Flip it</button>
        <motion.div className='w-32 h-32 bg-black'
            variants={{
                initial :{rotate:"0deg"},
                flip:{rotate:"360deg"},
                trasnition:{duration: 1, ease: "backInOut"}
            }}
            initial="initial"
            animate={controls}
         ></motion.div>
    </div>
  )
}

export default Animatecontrol
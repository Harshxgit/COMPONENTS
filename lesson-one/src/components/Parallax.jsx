import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
function Parallax() {
    const ref = useRef(null)
    const isInview = useInView(ref ,{once : true})
    useEffect( ()=>{
        console.log("i in view" ,isInview)
    },[isInview])
  return (
    <>
      <div className="h-screen " />
      <motion.div
        className="h-screen bg-cyan-500 sticky top-1"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transiton={{ duration:1 }}
      />
      <div
        ref={ref}
        className={` h-screen  ${isInview ? 'bg-red-500' : 'bg-black'} transition-colors duration-1000 sticky top-2`}    
       
      />
    </>
  );
}

export default Parallax;

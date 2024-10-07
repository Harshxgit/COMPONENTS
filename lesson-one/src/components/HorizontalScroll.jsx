import React from "react";
import { motion, useTransform,useScroll } from "framer-motion";
import { useRef } from "react";
function HorizontalScroll() {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <>
        <div className="h-80 bg-slate-700">hello </div>
      <div ref={targetref} className=" relative h-[300vh]  bg-neutral-900 ">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-36 border border-gray-950  p-4 sticky top-0 "
          >
            <div className="h-96 w-60 bg-slate-800 border-2 border-red-700">
              {" "}
              hello harshu
            </div>
            <div className="h-96 w-60 bg-slate-800 border-2 border-red-700">
              {" "}
              hello harshu
            </div>
            <div className="h-96 w-60 bg-slate-800 border-2 border-red-700">
              {" "}
              hello harshu
            </div>
            <div className="h-96 w-60 bg-slate-800 border-2 border-red-700">
              {" "}
              hello harshu
            </div>
            <div className="h-96 w-60 bg-slate-800 border-2 border-red-700">
              {" "}
              hello harshu
            </div>
            
           
          </motion.div>
        </div>
      </div>
      <div className="h-80 bg-slate-700">hello </div>
    </>
  );
}

export default HorizontalScroll;

import React, { useState } from "react";
import { AnimatePresence, motion, transform, useScroll } from "framer-motion";
export default function BasicMotion() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="grid gap-0 place-content-center h-screen ">
        <AnimatePresence mode="popLayout">
          {" "}
          {visible && (
            <motion.div
              className=" w-40 h-40 bg-black"
              initial={{ rotate: "0deg", scale: 0 ,y:0}}
              animate={{ rotate: "180deg" ,scale :1 ,y:[0,150,-150,-150,0]}}
              exit={{ rotate: "0deg" ,scale:0,y:0 }}
              transition={{ duration: 1, ease: "backInOut" , y:[0,0.25,0.5,0.85,1] }}
            ></motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className=" border-2 m-2 border-black bg-slate-700"
          onClick={() => setVisible(!visible)}
          layout
        >
          Show/Hide
        </motion.button>
      </div>
    </>
  );
}

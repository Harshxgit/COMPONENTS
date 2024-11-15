import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
export function MenuHover() {
  const [position, Setposition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <ul className="h-screen grid place-items-center">
      <nav className="relative w-fit flex border-2 border-black p-1 rounded-full mx-auto">
        <Tab Setposition={Setposition} >hello</Tab>
        <Tab Setposition={Setposition}>Harshu</Tab>
        <Tab Setposition={Setposition}>Hover Me</Tab>

        <Cursor position={position} />
      </nav>
    </ul>
  );
}

export function Tab({ children, Setposition }) {
  const ref = useRef();

  return (
    <>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref.current) return;
          const { width } = ref.current.getBoundingClientRect();
          Setposition({
            width,
            opacity:1,
            left : ref.current.offsetLeft
          })
        }}
        className=" relative cursor-pointer px-3 font-bold text-3xl m-2 "
      >
        {children}
      </li>
    </>
  );
}

function Cursor({ position }) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 rounded-full text-white"
    />
  );
}

import React from "react";
import { motion } from "framer-motion";
export default function Zoop() {
  return (
    <div className="h-screen bg-green-800 grid gap-2 place-content-center">
      <Zooplink href="#">INSTAGRAM</Zooplink>
      <Zooplink>FACEBOOK</Zooplink>
      <Zooplink>TWITTER</Zooplink>
      <Zooplink>WHATSAPP</Zooplink>
    </div>
  );
}

function Zooplink({ children, href }) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden bg-white text-4xl whitespace-nowrap font-black md:text-9xl  uppercase"
    >
      <div>
        {children.split("").map((i, l) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              key={l}
              className="inline-block"
            >
              {i}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((i, l) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              key={l}
              className="inline-block "
            >
              {i}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
}
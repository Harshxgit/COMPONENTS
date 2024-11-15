import React, { useRef } from "react";
import imgone from "../assets/imgone.jpg";
import imgtwo from "../assets/imgtwo.jpg";
import imgthree from "../assets/imgthree.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
export default function AppleScroll() {
  return (
    <>
      <TextParallax imgurl={imgone}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam
        amet magnam consequuntur dolores, nisi porro, veniam perferendis maxime
        dolore molestiae adipisci doloribus cupiditate reprehenderit aliquid
        sapiente reiciendis atque temporibus fugit quas voluptas! Amet, porro!
        Debitis voluptatem reprehenderit ad laboriosam molestias, earum fugit
        nemo amet.
      </TextParallax>
      <TextParallax imgurl={imgtwo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam
        amet magnam consequuntur dolores, nisi porro, veniam perferendis maxime
        dolore molestiae adipisci doloribus cupiditate reprehenderit aliquid
        sapiente reiciendis atque temporibus fugit quas voluptas! Amet, porro!
        Debitis voluptatem reprehenderit ad laboriosam molestias, earum fugit
        nemo amet
      </TextParallax>
      <TextParallax imgurl={imgthree}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam
        amet magnam consequuntur dolores, nisi porro, veniam perferendis maxime
        dolore molestiae adipisci doloribus cupiditate reprehenderit aliquid
        sapiente reiciendis atque temporibus fugit quas voluptas! Amet, porro!
        Debitis voluptatem reprehenderit ad laboriosam molestias, earum fugit
        nemo amet
      </TextParallax>
    </>
  );
}
const IMG_PADDING = 12;
function TextParallax({ imgurl, children }) {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <Stickimg img={imgurl} />
        <Overlay />
      </div>
      {children}
    </div>
  );
}

function Stickimg({ img }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={ref}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-neutral-900/70"
      />
    </motion.div>
  );
}

function Overlay() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    asset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [350, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5,0.75], [0,1, 0]);
  return (
    <motion.div
      style={{ y ,opacity}}
      ref={ref}
      className="absolute left-0 top-0 flex flex-col items-center justify-center h-screen text-white w-full"
    >
      <p className="text-center font-bold mb-2 md:text-3xl">hello hrshu</p>
      <p className="text-center font-bold  md:text-5xl">hello hrshu</p>
    </motion.div>
  );
}

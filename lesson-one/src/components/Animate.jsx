import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
export default function Animate() {
  return (
    <>
      <div className=" bg-neutral-900 h-screen"></div>
      <div className=" bg-neutral-900 h-screen">
        <UseScrollAdvance />
        {/* <WhileInView /> */}
        {/* <UseInView /> */}
        {/* <UseScrollBasice/> */}
      </div>
    </>
  );
}

function WhileInView() {
  return (
    <>
      <div className="relative mx-auto grid h-32 w-96 place-content-center">
        <h1 className="relative z-0 text-3xl font-black uppercase">
          Hello Harshu
        </h1>
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ margin: "-200px", once: "true" }}
          className="absolute z-10 top-0 bottom-0 right-0 left-0 bg-indigo-800"
        />
      </div>
    </>
  );
}

function UseInView() {
  const ref = useRef();
  const Inview = useInView(ref, {
    amount: "all",
  });
  useEffect(() => {
    console.log(Inview);
  }, [Inview]);

  return (
    <>
      <div
        ref={ref}
        className="relative mx-auto grid-flow-row h-32 w-96 place-content-center"
      >
        <h1 className="relative z-0 text-3xl font-black uppercase">
          Hello Harshu
        </h1>

        <motion.div
          animate={{
            y: Inview ? "100%" : "0%",
          }}
          className="absolute z-10 top-0 bottom-0 right-0 left-0 bg-indigo-800"
        />

        <motion.div
          animate={{
            y: Inview ? "-100%" : "0%",
          }}
          className="absolute z-10 top-0 bottom-0 right-0 left-0 bg-indigo-800"
        />

        <motion.div
          animate={{
            y: Inview ? "100%" : "0%",
          }}
          className="absolute z-10 top-0 bottom-0 right-0 left-0 bg-indigo-800"
        />
      </div>
    </>
  );
}

function UseScrollBasice() {
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFFFFF", "#6366F1"]
  );
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        background,
        x: "-50%",
        y: "-50%",
      }}
      className="fixed left-1/2 top-1/2 h-4 w-screen bg-indigo-500"
    />
  );
}

function UseScrollAdvance() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);
  return (
    <motion.div
         ref={ref}
      style={{ rotate: rotate }}
      className="size-48 mx-auto bg-cyan-800 "
    />
  );
}

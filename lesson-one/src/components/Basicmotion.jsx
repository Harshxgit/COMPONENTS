import React from "react";
import { motion, transform } from "framer-motion";
export default function BasicMotion() {
  return (
    <div className="grid gap-0 place-content-center h-screen ">
      <motion.div className=" w-40 h-40 bg-black transition translate-x-1.5"></motion.div>
    </div>
  );
}

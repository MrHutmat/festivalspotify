"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineFile } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="z-10 col-start-1 row-start-1 grid h-screen place-items-center overflow-x-hidden">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-10 px-5 lg:flex-row-reverse">
        <motion.img
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          src="/images/logoNoBorder.png"
          className="h-[250px] w-[250px] max-w-sm rounded-2xl shadow-2xl md:h-[384px] md:w-[384px]"
        >
          {/* <Image
              alt="Profile picture"
              className="max-w-sm rounded-2xl shadow-2xl"
              height="500"
              width="500"
              src="/images/logoNoBorder.png"
            /> */}
        </motion.img>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h1 className="text-5xl font-bold">
            Mit navn er <a className="text-turkish">Mathias.</a>
          </h1>
          <p className="py-6">
            Jeg pt datamatikker studerende på UCL i Odense. Det her er mit
            personlige portfølje, jeg har lavet i anledning af mit 4. semester.
            Her kan du finde nogle af de forskellige ting jeg har arbejdet med
            inde for frontend, og app udvikling.
          </p>
          <button className="inline-flex items-center rounded bg-turkish px-4 py-2 font-bold text-themelight hover:bg-darkturkish">
            <AiOutlineFile size={25} className="mr-2" />
            <span>Her er mit CV</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

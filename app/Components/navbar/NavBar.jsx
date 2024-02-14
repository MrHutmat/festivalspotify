"use client";

import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import NavItems from "./NavItems";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import MobileNav from "./MobileNav";
import Link from "next/link";
//import { useWindowDimension } from "@/Hooks/useWindowDimension";

{
  /* <div className="sticky top-0 bg-themeblack mt-7 z-10">
      <div className="mx-auto flex justify-between items-start md:items-center p-2 max-w-7xl px-3">
      
      <div className="sticky p-5 justify-between top-0 flex bg-themeblack mt-7 z-10 max-w-7xl items-start mx-auto">
      <div className="flex flex-row items-center">
      */
}

const NavBar = () => {
  const [dimension, setDimension] = useState(global.innerWidth);

  const [isOpen, setIsOpen] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const changeNavBar = () => {
      window.scrollY > 0 ? setHasScrolled(true) : setHasScrolled(false);
    };

    window.addEventListener("scroll", changeNavBar);
    return () => {
      window.removeEventListener("scroll", changeNavBar);
    };
  }, [hasScrolled]);

  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      console.log("***** debounced resize"); // See the cool difference in console
      setDimension(global.innerWidth);
    }, 100); // 100ms

    if (dimension > 770) {
      setIsOpen(false);
    }

    window.addEventListener("resize", debouncedResizeHandler);
    return () => {
      global.removeEventListener("resize", debouncedResizeHandler);
    };
  }, [isOpen, dimension]); // Note this empty array. this effect should run only on mount and unmount

  // const changeState = () => {
  //   width >= 768 ? setIsOpen(true) : setHasScrolled(false);
  // }

  // console.log(hasScrolled);
  // console.log(isOpen);
  // console.log(dimension);

  // if (width >= 768) {
  //   return setIsOpen(false);
  // }

  return (
    <div className={`sticky top-0 ${isOpen ? "z-20" : "z-50"}`}>
      <nav
        className={`z-50 bg-themeblack bg-opacity-95 px-2 py-5 backdrop-blur-lg backdrop-saturate-200 backdrop-filter transition-shadow duration-500 md:items-center ${
          isOpen || hasScrolled
            ? "shadow-[0_16px_32px_-16px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.1)]"
            : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className=""
          >
            <div className="flex items-center text-turkish md:hidden">
              <Hamburger
                direction="right"
                toggled={isOpen}
                toggle={setIsOpen}
              />

              <p className="pl-1 pr-3 text-lg font-bold text-themegray">MENU</p>
            </div>

            <NavItems onClick={() => setIsOpen(false)} />
          </motion.div>

          <motion.div
            initial={{
              y: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className=""
          >
            <Link key={"home"} href={"/"}>
              <motion.h1
                whileHover={{
                  scale: 1.1,
                }}
                className="cursor-pointer text-4xl font-black text-turkish"
              >
                HELSENGREN
              </motion.h1>
            </Link>
          </motion.div>

          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="hidden justify-center md:flex"
          >
            <Socials />
          </motion.div>
        </div>
      </nav>
      <MobileNav
        onClick={() => setIsOpen(false)}
        isActiv={isOpen ? true : false}
      />
    </div>
  );
};

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default NavBar;

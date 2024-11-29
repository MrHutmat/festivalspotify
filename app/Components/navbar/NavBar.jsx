"use client";

import React from "react";

import Socials from "./Socials";

import { motion } from "framer-motion";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { LogOut, Login } from "../Login";
import AuthCheck from "../AuthCheck";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sticky top-0 ${isOpen ? "z-20" : "z-50"}`}>
      <nav
        className={`z-50 bg-themeblack bg-opacity-95 px-2 py-5 backdrop-blur-lg backdrop-saturate-200 backdrop-filter transition-shadow duration-500 md:items-center`}
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
            <div className="text-themegray flex text-turkish">
              <Login />
              <AuthCheck>
                <LogOut />
              </AuthCheck>
            </div>
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

export default NavBar;

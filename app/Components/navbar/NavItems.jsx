"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
//import { useState } from "react";
//import { usePathname } from 'next/navigation';
//import { Link } from "react-scroll/modules";
import Socials from "./Socials";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Fade as Hamburger } from "hamburger-react";
import { Login } from "../Login";

const NavItems = ({ onClick }) => {
  //const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  // const navLinks = [
  //   {
  //     label: "Home",
  //     page: "/#home",
  //     linkId: 0,
  //   },
  //   {
  //     label: "About",
  //     page: "/#about",
  //     linkId: 1,
  //   },
  //   {
  //     label: "Projects",
  //     page: "/#projects",
  //     linkId: 2,
  //   },
  //   {
  //     label: "Contact",
  //     page: "/#contact",
  //     linkId: 3,
  //   },
  // ];

  return (

    <Login />
    // <>
    //   <div
    //     className={`mt-8 hidden space-y-2 justify-self-center px-3 pb-3 text-turkish md:mt-0 md:flex md:items-center md:space-x-0 md:space-y-0 md:px-1 md:pb-0`}
    //   >
    //     <>
    //       {navLinks.map((item) => {
    //         return (
    //           <div
    //             key={item.label}
    //             className="navButton w-[101px] hover:bg-left-bottom hover:text-themeblack"
    //           >
    //             <Link
    //               key={item.linkId}
    //               href={item.page}
    //               scroll={false}
    //               className="ml-0 block cursor-pointer px-[5.5px] py-2 text-center font-bold"
    //               onClick={onClick}
    //             >
    //               {item.label}
    //             </Link>
    //           </div>
    //         );
    //       })}
    //     </>
    //   </div>

    //   {/* {isActiv && (
    //     <div
    //       className={`justify-self-center pb-3 mt-8 md:items-center md:block md:pb-0 md:mt-0 text-turkish`}
    //     >
    //       <div className="md:flex md:space-x-0 md:space-y-0 space-y-2 px-3 md:px-1">
    //         {navLinks.map((item) => {
    //           return (
    //             <div
    //               key={item.label}
    //               className="navButton min-w-[91px] w-[150px] md:w-auto hover:bg-left-bottom hover:text-themeblack"
    //             >
    //               <Link
    //                 key={item.linkId}
    //                 href={item.page}
    //                 scroll={false}
    //                 className="font-bold px-3 py-2 text-center block ml-0 cursor-pointer"
    //                 onClick={onClick}
    //               >
    //                 {item.label}
    //               </Link>
    //             </div>
    //           );
    //         })}

    //         <div className="md:hidden flex justify-center">
    //           <Socials />
    //         </div>
    //       </div>
    //     </div>
    //   )} */}
    // </>
  );
};

export default NavItems;

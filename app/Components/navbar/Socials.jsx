import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
      >
        <SocialIcon
          url="https://github.com/MrHutmat/4.Semester"
          target="_blank"
          fgColor="#66fcf1"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
      >
        <SocialIcon
          url="https://www.linkedin.com/in/mathias-helsengren-1231b9139/"
          target="_blank"
          fgColor="#66fcf1"
          bgColor="transparent"
        />
      </motion.div>
    </>
  );
};

export default Socials;

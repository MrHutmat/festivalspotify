"use client";

import { allSavedSongs } from "@/app/utils/allSavedSongs";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

const Button = ({ modalContent, buttonText }) => {
  // const [commonArtist, setCommonArtist] = useState([]);

  //console.log(session);

  // const handleClick = async () => {
  //   const response = await allSavedSongs(session);
  //   //await allSavedSongs(session);
  //   console.log(response);
  //   setCommonArtist(response);
  //   console.log(commonArtist);
  //   console.log(response);

  // };

  // return (
  //   <div>
  //     <button onClick={handleClick}>click her</button>
  //   </div>
  // );
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="bg-themelight text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        onClick={handleOpenModal}
      >
        {buttonText}
      </button>
      <ModalContainer isOpen={isOpen} closeModal={handleCloseModal}>
        {modalContent}
      </ModalContainer>
    </div>
  );
};

export default Button;

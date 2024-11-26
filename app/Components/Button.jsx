"use client";

//THIS IS USED



import { useState } from "react";
import ModalContainer from "./ModalContainer";

const Button = ({ modalContent, buttonText }) => {

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



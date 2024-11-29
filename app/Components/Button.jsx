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
        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg px-6 py-3 transition duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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

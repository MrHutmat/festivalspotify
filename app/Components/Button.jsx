"use client";

//THIS IS USED


//import { allSavedSongs } from "@/app/utils/allSavedSongs";
//import { useSession } from "next-auth/react";
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
 // const [selectedOption, setSelectedOption] = useState("option1");
 // const { data: session } = useSession();
  const [commonArtist, setCommonArtist] = useState([]);

  //console.log(session);

  // const handleButtonClick = async () => {
  //   const response = await allSavedSongs(session);
  //   //await allSavedSongs(session);
  //   console.log(response);
  //   setCommonArtist(response);
  //   console.log(commonArtist);
  //   console.log(response);
  // };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

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

//(selectedOption, handleOptionChange, handleButtonClick)

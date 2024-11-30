"use client";

//THIS IS USED

// const ModalContainer = ({ isOpen, closeModal, children }) => {
//   if (!isOpen) return null;

//   return (

//     <div
//     className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center
//                 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
//   >
//     <div
//       className={`w-[750px] bg-gray-800 rounded-lg shadow-lg p-6
//                   transform transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"}`}
//     >
//       <button
//         className="text-gray-400 hover:text-gray-300 text-2xl absolute top-4 right-4 focus:outline-none"
//         onClick={closeModal}
//       >
//         &times;
//       </button>
//       <div className="text-white">{children}</div>
//     </div>
//   </div>
//   );
// };

import { useState, useRef } from "react";
import ModalForAllSongs from "./Modals/ModalForAllSongs";
import ModalForPlaylistSelector from "./Modals/ModalForPlaylistSelector";

const ModalContainer = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Dropdown selection
  const modalRef = useRef(null);
  const getModalContent = () => {
    if (selectedOption === "Liked Songs") return <ModalForAllSongs />;
    if (selectedOption === "Playlist") return <ModalForPlaylistSelector />;
    return null; // Fallback
  };

  const openModal = () => {
    if (selectedOption) {
      modalRef.current?.showModal(); // Open the modal
    } else {
      alert("Please select an option first!");
    }
  };

  const closeModal = () => {
    modalRef.current?.close(); // Close the modal
  };

  return (
    <div className="">
      <div className="mb-6">
        <label htmlFor="source" className="block text-lg mb-2">
          Select a source:
        </label>
        <select
          id="source"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded w-full"
        >
          <option value="">-- Choose an option --</option>
          <option value="Liked Songs">Liked Songs</option>
          <option value="Playlist">Playlist</option>
        </select>
      </div>

      {/* Button to trigger modal */}
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
        onClick={openModal}
      >
        Find Festival Matches
      </button>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box max-h-[450px]">
          <button
            className="text-gray-400 hover:text-gray-300 text-2xl absolute top-4 right-4 focus:outline-none"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="max-h-[65vh]">
            {getModalContent()}
          </div>
        </div>
      </dialog>

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            className="min-w-fit min-h-fit bg-gray-800 rounded-lg shadow-lg p-6 
                      relative overflow-hidden"
          >
            <button
              className="text-gray-400 hover:text-gray-300 text-2xl absolute top-4 right-4 focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="overflow-y-auto max-h-[65vh]">
              {getModalContent()}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ModalContainer;

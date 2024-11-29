"use client";

//THIS IS USED

const ModalContainer = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    // <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
    //   <div className="w-[750px] bg-gray-800 rounded-lg shadow-lg p-6">
    //     <button
    //       className="text-gray-400 hover:text-gray-300 text-2xl absolute top-4 right-4 focus:outline-none"
    //       onClick={closeModal}
    //     >
    //       &times;
    //     </button>
    //     <div className="text-white">
    //       {children}
    //     </div>
    //   </div>
    // </div>

    <div
    className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center 
                transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
  >
    <div
      className={`w-[750px] bg-gray-800 rounded-lg shadow-lg p-6 
                  transform transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"}`}
    >
      <button
        className="text-gray-400 hover:text-gray-300 text-2xl absolute top-4 right-4 focus:outline-none"
        onClick={closeModal}
      >
        &times;
      </button>
      <div className="text-white">{children}</div>
    </div>
  </div>
  );
};

export default ModalContainer;

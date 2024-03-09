"use client";

const ModalContainer = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-themegray text-xl place-self-end"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="bg-themelight p-2 rounded-sm">{children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;

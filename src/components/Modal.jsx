import React from "react";
import ReactDOM from "react-dom";

const Modal = ({setToggleModal}) => {
  const closeModal = () => {
    setToggleModal(false);
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed z-[42] top-12 left-24 right-24 bottom-12 bg-white rounded-lg p-4">
        <p>Loading..</p>
      </div>
      <div onClick={closeModal} className="fixed z-[41] top-0 left-0 right-0 bottom-0 bg-gray-600/40 backdrop-blur-sm"/>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;

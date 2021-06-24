import React, { useState } from "react";

const useExerciseModal = () => {
  const [showModal, setShowModal] = useState(false);

  const clickShowModal = () => {
    console.log("Show modal: ", showModal);
    setShowModal(true);
  };

  const clickCloseModal = () => {
    console.log("Modal closed");
  };

  return { showModal, clickShowModal };
};

export default useExerciseModal;

import React from "react";
import useExerciseModal from "../hooks/useExerciseModal";

const Exercise = ({ exercise, clickShowModal }) => {
  // const { clickShowModal } = useExerciseModal();

  return (
    <div className="exercise-title" id={exercise.id} onClick={clickShowModal}>
      {exercise.name}
    </div>
  );
};

export default Exercise;

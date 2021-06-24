import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { MapPoints } from "../MapPoints";
import Exercises from "./Exercises";
import ExerciseModal from "./ExerciseModal";
import useExerciseModal from "../hooks/useExerciseModal";

// import components
import MuscleDescription from "./MuscleDescription";

const MuscleDashboard = () => {
  const params = useParams();

  // const { showModal } = useExerciseModal();
  const [showModal, setShowModal] = useState(false);

  const clickShowModal = () => {
    console.log("SHOW MMODAL");
    setShowModal(true);
  };

  return (
    <div>
      <MuscleDescription muscleId={params.id} />
      {showModal && <ExerciseModal />}
      <Exercises muscleId={params.id} clickShowModal={clickShowModal} />
    </div>
  );
};

export default MuscleDashboard;

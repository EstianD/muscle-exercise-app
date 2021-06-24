import React from "react";
import { useLocation } from "react-router-dom";
import ExerciseDescription from "./ExerciseDescription";

const ExerciseDashboard = () => {
  const location = useLocation();
  console.log("LOCATION: ", location);

  const { name, description, id } = location.state.exercise;

  return (
    <div>
      <ExerciseDescription name={name} description={description} id={id} />
    </div>
  );
};

export default ExerciseDashboard;

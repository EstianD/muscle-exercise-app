import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { MapPoints } from "../MapPoints";
import Exercises from "./Exercises";

// import components
import MuscleDescription from "./MuscleDescription";

const MuscleDashboard = () => {
  const params = useParams();

  return (
    <div>
      <MuscleDescription muscleId={params.id} />
      <Exercises muscleId={params.id} />
    </div>
  );
};

export default MuscleDashboard;

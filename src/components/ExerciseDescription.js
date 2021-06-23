import React from "react";
import {
  BrowserRouter as Router,
  useParams,
  useLocation,
} from "react-router-dom";

const ExerciseDescription = () => {
  const params = useParams();
  const location = useLocation();
  console.log("PARAMS: ", params);
  console.log("LOCATION: ", location);

  return <div>Exercise description</div>;
};

export default ExerciseDescription;

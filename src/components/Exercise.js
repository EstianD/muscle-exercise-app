import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";

const Exercise = ({ exercise }) => {
  let history = useHistory();
  const handleExerciseClick = (e) => {
    console.log("exercise: ", e.target.id);
    history.push(`/exercise/${e.target.id}`, { state: "hahahaha" });
  };

  return (
    <div className="exercise-link">
      {/* <div
        className="exercise-title"
        id={exercise.id}
        onClick={(e) => handleExerciseClick(e)}
      >
        {exercise.name}
      </div> */}
      <Link
        to={{
          pathname: `/exercise/${exercise.id}`,
          state: { exercise: exercise },
        }}
      >
        {exercise.name}
      </Link>
    </div>
  );
};

export default Exercise;

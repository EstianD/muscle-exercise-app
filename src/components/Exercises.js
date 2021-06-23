import React from "react";
import Exercise from "./Exercise";
import ExercisesPagination from "./ExercisesPagination";

import useExercises from "../hooks/useExercises";

const Exercises = (props) => {
  const { muscleId } = props;
  const {
    allExercises,
    isLoading,
    setPage,
    page,
    exerciseCount,
    pageExercises,
  } = useExercises(muscleId);
  console.log("EXERCISES PROPS: ", props);

  return (
    <div className="exercises-container">
      {isLoading && <p>Loading...</p>}
      {pageExercises.length > 0 &&
        pageExercises.map((exercise) => (
          <Exercise key={exercise.uuid} exercise={exercise} />
        ))}
      {pageExercises.length > 0 && (
        <ExercisesPagination
          setPage={setPage}
          page={page}
          exerciseCount={exerciseCount}
        />
      )}
    </div>
  );
};

export default Exercises;

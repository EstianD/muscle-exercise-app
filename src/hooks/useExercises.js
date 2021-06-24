import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = `https://wger.de/api/v2`;
const LANGUAGE = 2; //Language {2} = english

const useExercises = (muscleId) => {
  const [allExercises, setAllExercises] = useState([]);
  const [exerciseCount, setExerciseCount] = useState(null);
  const [page, setPage] = useState(null);
  const [pageExercises, setPageExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("MUSCLE DASHBOARD EFFECT");

    const getExercises = async (muscleId) => {
      console.log("muscleID: ", muscleId);
      try {
        const exercisesRes = await axios.get(
          `${BASE_URL}/exercise?muscles=${muscleId}&language=${LANGUAGE}&limit=1000`
        );
        console.log("FULL RESPONSE: ", exercisesRes);

        if (exercisesRes) {
          setAllExercises(exercisesRes.data.results);
          setExerciseCount(exercisesRes.data.count);
          setPage(1);
          setIsLoading(false);
        }
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };

    getExercises(muscleId);
  }, []);

  useEffect(() => {
    console.log("PAGE CHANGED", page);
    if (page === 1) {
      //  setPageExercises(allExercises.slice(0, page*10));
      setPageExercises(allExercises.slice(0, page * 10));
    } else {
      setPageExercises(allExercises.slice(page * 10 - 10, page * 10));
    }
  }, [page]);

  //   const handleExerciseClick = (e) => {
  //     console.log("exercise: ", e.target.id);
  //     history.push(`/exercise/${e.target.id}`);
  //   };

  return {
    allExercises,
    isLoading,
    setPage,
    page,
    exerciseCount,
    pageExercises,
  };
};

export default useExercises;

import React, { useEffect } from "react";
import axios from "axios";

const BASE_URL = `https://wger.de/api/v2`;

const ExerciseDescription = (props) => {
  const { name, description, id } = props;

  useEffect(() => {
    // Get all images exercise function
    const getAllExerciseImages = async () => {
      try {
        const imagesRes = await axios.get(
          `${BASE_URL}/exerciseimage/${id}/thumbnails`
        );
        if (imagesRes) {
          // Get specified image for exercise
          console.log("IMAGES: ", imagesRes);
        }
      } catch (err) {
        console.log("ERROR GETTING IMAGES: ", err);
      }
    };

    getAllExerciseImages();
  }, []);

  return (
    <div className="exercise-description-container">
      <h3>{name}</h3>
      <div
        className="muscle-description"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
    </div>
  );
};

export default ExerciseDescription;

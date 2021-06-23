import React, { useState, useEffect } from "react";
import { MapPoints } from "../MapPoints";

const MuscleDescription = (props) => {
  const [muscleInfo, setMuscleInfo] = useState([]);

  console.log("PROPS: ", props);

  const { muscleId } = props;

  useEffect(() => {
    let dataArray = [];

    const muscleData = MapPoints().areas.find((muscle) => {
      return parseInt(muscleId) === muscle.id;
    });

    dataArray.push(muscleData);
    setMuscleInfo(dataArray);
  }, []);

  const renderDescription = () => {
    if (muscleInfo.length > 0) {
      console.log("DATA: ", muscleInfo);

      return (
        <div className="muscle-description-container">
          <div
            className="muscle-description"
            dangerouslySetInnerHTML={{
              __html: muscleInfo[0].description,
            }}
          ></div>
          <div className="muscle-image">
            <img src={muscleInfo[0].image} alt={muscleInfo[0].name} />
          </div>
        </div>
      );
    }
  };

  return <>{renderDescription()}</>;
};

export default MuscleDescription;

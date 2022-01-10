import React from "react";

import ThoughtTool from "../thought-tools/thought-tool.component";

import "./thought-tools-page.styles.scss";

const ThoughtToolPage = ({ class_name, imageArray, exerciseName }) => {
  // var iterator = 0;
  return (
    <div className="caroselPage">
      {imageArray.map((image, index) => (
        <ThoughtTool
          key={index}
          className={class_name}
          image={image}
          exerciseName={exerciseName[index]}
        />
        // (iterator = iterator + 1)
      ))}
    </div>
  );
};

export default ThoughtToolPage;

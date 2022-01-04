import React from "react";
import "./thought-tool.styles.scss";

const ThoughtTool = ({ topicTitle, exerciseTitles }) => {
  return (
    <div className="CBT-exercise-topic">
      <div> {topicTitle} </div>
      <br />

      <div className="thought-tool-group">
        {exerciseTitles.map((exercise) => (
          <div className="thought-tool-exercise" key={exercise}>
            <label htmlFor="thought-tool-exercise-button"> {exercise}</label>
            <button id="thought-tool-exercise-button">
              {/* <img src={logo} /> */}
              Place Holder Text
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThoughtTool;

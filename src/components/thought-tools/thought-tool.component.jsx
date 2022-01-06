import React from "react";
import "./thought-tool.styles.scss";

const ThoughtTool = ({ topicTitle, exerciseTitles, image }) => {
  var iter = 0;
  return (
    <div className="CBT-exercise-topic">
      {/* <img src="/static/media/ChallengeAutomaticThoughts.2a9f5f33023c34930dba.png" /> */}
      <div className="title"> {topicTitle} </div>
      {/* <br /> */}

      <div className="thought-tool-group">
        {exerciseTitles.map((exercise) => (
          <div className="thought-tool-exercise" key={exercise}>
            <label htmlFor="thought-tool-exercise-button"> {exercise}</label>
            {console.log(iter)}
            <button id="thought-tool-exercise-button">
              <img src={image[iter]} className="image" />
              {(iter = iter + 1)}
              {console.log(iter)}
              {/* <img src={image} />
              Place Holder Text */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThoughtTool;

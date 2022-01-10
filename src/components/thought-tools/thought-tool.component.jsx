import React from "react";
import "./thought-tool.styles.scss";

const ThoughtTool = ({ topicTitle, className, image, exerciseName }) => {
  var name = "visible-items";
  if (className == false) {
    name = "hidden-items";
  } else {
    name = "visible-items";
  }

  return (
    <div className={name + " " + "other"}>
      {/* {number} */}
      <button className="displayButton">
        {" "}
        <img className="imageButton" src={image} />
      </button>
      <label className="exercise-label"> {exerciseName}</label>

      {/* {console.log("ClassName: ", name)} */}
    </div>
  );
};

export default ThoughtTool;

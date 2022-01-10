import React from "react";

import ThoughtTool from "../thought-tools/thought-tool.component";

import "./thought-tools-page.styles.scss";

const ThoughtToolPage = ({ class_name, imageArray }) => {
  return (
    <div className="caroselPage">
      {imageArray.map((image) => (
        <ThoughtTool className={class_name} image={image} />
      ))}
    </div>
  );
};

export default ThoughtToolPage;

import React from "react";
import "./depression-test.styles.scss";

import { ReactComponent as InfoButtonSVG } from "../../images/info-round-button.svg";

const DepressionTest = () => (
  <div className="depression-test">
    <div>Depression Test(PHQ-9)</div>
    <div className="buttons">
      {/* <button className="info-button"> i </button> */}
      <button className="infobutton">
        <InfoButtonSVG className="svg" />
      </button>{" "}
      <button className="start-button-test"> Start Now</button>
    </div>
  </div>
);

export default DepressionTest;

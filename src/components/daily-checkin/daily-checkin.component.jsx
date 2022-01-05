import React from "react";
import "./daily-checkin.styles.scss";

import DailycheckinImage from "../../DailyCheckin.png";

const DailyCheckin = () => (
  <div className="total">
    <div className="daily-checkin">
      <div className=" labels-together">
        <div className="title"> Daily Checkin </div>
        <div> Record Mood, Emotions and journal</div>

        <button className="start-button"> Start</button>
      </div>
      <img className="img" src={DailycheckinImage} />
    </div>
  </div>
);

export default DailyCheckin;

import React from "react";
import "./App.css";
import logo from "./logo512.png";

const App = () => (
  <div>
    <div className="depression-test">
      <div>Depression Test(PHQ-9)</div>
      <div className="buttons">
        <button className="info-button"> i </button>
        <button> Start Now</button>
      </div>
    </div>{" "}
    {/* ^ end depression Test div*/}
    {/* starting _|_ Daiuly checkin Div div*/}
    <div className="daily-checkin">
      <div className="inline-daily-checkin">
        <div> Daily Checkin</div>
        <div> Record Mood, Emotions and journal</div>
        <button className="start-button"> Start</button>
      </div>
    </div>
    {/* Ending ^ Daily Checkin Div  Div div*/}
    {/* starting _|_ Thoughttools Div div*/}
    {/*  */}
    <div className="CBT-exercise-topic">
      <div> Thought Tools</div>
      <br />
      <div className="thought-tool-group">
        <div className="thought-tool-exercise">
          <label htmlFor="thought-tool-exercise-button">
            {" "}
            Challenge Automatic Thoughts
          </label>
          <button id="thought-tool-exercise-button">
            {/* <img src={logo} /> */}
            Place Holder Text
          </button>
        </div>
        <div className="thought-tool-exercise">
          <label htmlFor="thought-tool-exercise-button"> Prediction</label>
          <button id="thought-tool-exercise-button">Place Holder Text </button>
        </div>
      </div>
    </div>
    {/*  */}
    {/*  */}
    <div className="CBT-exercise-topic">
      <div> Goals, Values & Actions</div>
      <br />
      <div className="thought-tool-group">
        <div className="thought-tool-exercise">
          <label htmlFor="thought-tool-exercise-button"> Goal Setting</label>
          <button id="thought-tool-exercise-button">Place Holder Text </button>
        </div>
        <div className="thought-tool-exercise">
          <label htmlFor="thought-tool-exercise-button">
            {" "}
            Smart Goal Building
          </label>
          <button id="thought-tool-exercise-button">Place Holder Text </button>
        </div>
      </div>
    </div>
    {/*  */}
    {/*  */}
    <div className="CBT-exercise-topic">
      <div> Mindfulness Tools</div>
      <br />
      <div className="thought-tool-group">
        <div className="thought-tool-exercise">
          <label htmlFor="thought-tool-exercise-button">
            {" "}
            Gratitude Checkin
          </label>
          <button id="thought-tool-exercise-button">Place Holder Text </button>
        </div>
        <div className="thought-tool-exercise">
          <label htmlFor="thought-tool-exercise-button"> Reflection</label>
          <button id="thought-tool-exercise-button">Place Holder Text </button>
        </div>
      </div>
    </div>
    {/*  */}
    {/*  */}
    <div className="CBT-exercise-topic">
      <div> Sleep, Nutrition & Activity</div>
      <br />
      <div className="thought-tool-group">
        <div className="thought-tool-exercise">
          <label htmlFor="thought-tool-exercise-button"> Log Sleep</label>
          <button id="thought-tool-exercise-button">Place Holder Text </button>
        </div>
      </div>
    </div>
    <div></div>
    {/*  */}
  </div>
);

export default App;

/*



Mindfulness Tools
  Gratitude Checkin 
  Reflection

Sleep, Nutrition & Activity
  Log Sleep


*/

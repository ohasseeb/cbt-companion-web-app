import React from "react";
import "./App.css";
import logo from "./logo512.png";
import DepressionTest from "./components/depression-test/depression-test.component.jsx";
import DailyCheckin from "./components/daily-checkin/daily-checkin.component";
import ThoughtTool from "./components/thought-tools/thought-tool.component";
const App = () => (
  <div>
    <DepressionTest />
    <DailyCheckin />

    {/* starting _|_ Daiuly checkin Div div*/}

    {/* Ending ^ Daily Checkin Div  Div div*/}
    {/* starting _|_ Thoughttools Div div*/}
    {/*  */}
    <ThoughtTool
      topicTitle={"Thought Tools"}
      exerciseTitles={["Challenge Automatic Thoughts", " Prediction"]}
    />

    <ThoughtTool
      topicTitle={"Goals Values & Actions"}
      exerciseTitles={["Goal Setting", "Smart Goal Building"]}
    />

    <ThoughtTool
      topicTitle={"Mindfulness Tools"}
      exerciseTitles={["Gratitude Checkin", "Reflection"]}
    />

    <ThoughtTool
      topicTitle={"Sleep Nutrition & Activity"}
      exerciseTitles={["Log Sleep"]}
    />
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}

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

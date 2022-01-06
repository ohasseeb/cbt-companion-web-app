import React from "react";
import "./App.css";
import logo from "./logo512.png";
import DepressionTest from "./components/depression-test/depression-test.component.jsx";
import DailyCheckin from "./components/daily-checkin/daily-checkin.component";
import ThoughtTool from "./components/thought-tools/thought-tool.component";
import ThoughtToolCollection from "./components/thought-tools-collection/thought-tools-collection";
const App = () => (
  <div>
    <DepressionTest />
    <DailyCheckin />
    <ThoughtToolCollection />
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

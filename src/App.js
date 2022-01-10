import React from "react";
import "./App.css";
import logo from "./logo512.png";
import DepressionTest from "./components/depression-test/depression-test.component.jsx";
import DailyCheckin from "./components/daily-checkin/daily-checkin.component";
import ThoughtTool from "./components/thought-tools/thought-tool.component";
import ThoughtToolCollection from "./components/thought-tools-collection/thought-tools-collection";

import AutoMaticThoughtImage from "./images/ChallengeAutomaticThoughts.png";
import PredictionImage from "./images/Prediction.png";

import GoalSettingImage from "./images/GoalSetting.png";
import SMARTGoalSettingImage from "./images/SMARTGoalSetting.png";
import ValuesAssessmentImage from "./images/ValuesAssessment.png";
import StrengthExplorationImage from "./images/StrengthExploration.png";
import ManageStressImage from "./images/ManageStress.png";
import ActionPlanImage from "./images/ActionPlan.png";

import GratitudeCheckinImage from "./images/GratitudeCheckin.png";
import ReflectionImage from "./images/Reflection.png";
import BreathingExerciseImage from "./images/BreathingExercises.png";
import MeditationsImage from "./images/Meditations.png";

import LogSleepImage from "./images/LogSleep.png";

const App = () => (
  <div>
    <DepressionTest />
    <DailyCheckin />

    <ThoughtToolCollection
      title={"Thought Tools"}
      imageArray={[AutoMaticThoughtImage, PredictionImage]}
      exerciseName={["Automatic Thought", "Prediction"]}
    />

    <ThoughtToolCollection
      title={"Goals Values & Actions"}
      imageArray={[
        GoalSettingImage,
        SMARTGoalSettingImage,
        ValuesAssessmentImage,
        StrengthExplorationImage,
        ManageStressImage,
        ActionPlanImage,
      ]}
      exerciseName={[
        "Goal Setting",
        "Smart Goal Building",
        "Values Assessment",
        " Strength Exploration",
        "Manage Stress",
        "Action Plan",
      ]}
    />

    <ThoughtToolCollection
      title={"Mindfulness Tools"}
      imageArray={[
        GratitudeCheckinImage,
        ReflectionImage,
        BreathingExerciseImage,
        MeditationsImage,
      ]}
      exerciseName={[
        "Gratitude Checkin",
        "Reflection",
        "Breathing Exercise",
        "Meditations",
      ]}
    />

    <ThoughtToolCollection
      title={"Sleep, Nutrition & Activity"}
      imageArray={[LogSleepImage]}
      exerciseName={["Log Sleep"]}
    />
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

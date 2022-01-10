import ThoughtTool from "../thought-tools/thought-tool.component";
import ThoughtToolPage from "../thought-tools-page/thought-tools-page.component";
import "./thought-tools-collection.styles.scss";

import AutoMaticThoughtImage from "../../images/ChallengeAutomaticThoughts.png";
import BrainImage from "../../images/Brain.png";
import PredictionImage from "../../images/Prediction.png";

import GoalSettingImage from "../../images/GoalSetting.png";
import SMARTGoalSettingImage from "../../images/SMARTGoalSetting.png";
import ValuesAssessmentImage from "../../images/ValuesAssessment.png";
import StrengthExplorationImage from "../../images/StrengthExploration.png";
import ManageStressImage from "../../images/ManageStress.png";
import ActionPlanImage from "../../images/ActionPlan.png";

import GratitudeCheckinImage from "../../images/GratitudeCheckin.png";
import ReflectionImage from "../../images/Reflection.png";
import BreathingExerciseImage from "../../images/BreathingExercises.png";
import MeditationsImage from "../../images/Meditations.png";

import LogSleepImage from "../../images/LogSleep.png";

import DoubleRightButton from "../../images/DoubleRightButton.png";
import DoubleLeftButton from "../../images/DoubleLeftButton.png";
import React from "react";

class ThoughtToolCollection extends React.Component {
  constructor() {
    super();
    this.state = {
      viewableClassName: true,
      unViewableClassName: false,
      number: 0,
      index: 0,
    };
  } // end ctor

  increment = () => {
    console.log("\n");
    // if (this.state.index == 0 || this.state.index > 0) {
    if (this.state.index == 2) {
      return;
    }

    this.setState({ index: this.state.index + 1 });
    this.changeStyles();
  };

  decrement = () => {
    console.log("Button Clicked");
    // this.setState({ number: this.state.number - 1 });

    if (this.state.index == 0) {
      return;
    }

    // if (this.state.index == 1) {
    this.setState({ index: this.state.index - 1 });
    this.changeStyles();
    // }
  };

  changeStyles = () => {
    if (this.state.viewableClassName == true) {
      this.setState({ viewableClassName: false });
    } else {
      this.setState({ viewableClassName: true });
    }

    if (this.state.unViewableClassName == false) {
      this.setState({ unViewableClassName: true });
      return;
    } else {
      this.setState({ unViewableClassName: false });
    }
  };

  test = () => {
    if (this.props.imageArray.length == 2) {
      console.log("got here");
    }
    return (
      <div>
        <div>AWOOOOOOOOOGA</div>
        <img src={ManageStressImage} />
      </div>
    );
  };

  render() {
    console.log(this.props.name);

    // if (this.props.imageArray.length == 2) {
    //   console.log("got here");
    //   this.test();
    // }

    if (this.props.imageArray.length == 2) {
      var componentsArray = [
        <ThoughtToolPage
          class_name={this.state.viewableClassName}
          imageArray={this.props.imageArray}
        />,
      ];
    } else if (this.props.imageArray.length == 4) {
      var componentsArray = [
        <ThoughtToolPage
          class_name={this.state.viewableClassName}
          imageArray={[this.props.imageArray[0], this.props.imageArray[1]]}
        />,
        <ThoughtToolPage
          class_name={this.state.unViewableClassName}
          imageArray={[this.props.imageArray[2], this.props.imageArray[3]]}
        />,
      ];
    } else if (this.props.imageArray.length == 6) {
      var componentsArray = [
        <ThoughtToolPage
          class_name={this.state.viewableClassName}
          imageArray={[this.props.imageArray[0], this.props.imageArray[1]]}
        />,
        <ThoughtToolPage
          class_name={this.state.unViewableClassName}
          imageArray={[this.props.imageArray[2], this.props.imageArray[3]]}
        />,
        <ThoughtToolPage
          class_name={this.state.viewableClassName}
          imageArray={[this.props.imageArray[4], this.props.imageArray[5]]}
        />,
      ];
    } else {
      var componentsArray = [
        <ThoughtToolPage
          class_name={this.state.viewableClassName}
          imageArray={[this.props.imageArray[0]]}
        />,
      ];
    }

    // var componentsArray = [
    //   <ThoughtToolPage
    //     class_name={this.state.viewableClassName}
    //     imageArray={[SMARTGoalSettingImage, PredictionImage, GoalSettingImage]}
    //   />,
    //   <ThoughtToolPage
    //     class_name={this.state.unViewableClassName}
    //     imageArray={[
    //       ValuesAssessmentImage,
    //       StrengthExplorationImage,
    //       ManageStressImage,
    //     ]}
    //   />,
    //   <ThoughtToolPage
    //     class_name={this.state.viewableClassName}
    //     imageArray={[ActionPlanImage]}
    //   />,
    // ];

    var index = 0;
    return (
      <div className="container">
        {/* {this.test()} */}

        <label className="title label"> {this.props.title} </label>
        <span className="items">
          <button className="button" onClick={this.decrement}>
            {" "}
            <img className="image" src={DoubleLeftButton} />{" "}
          </button>
          {componentsArray[this.state.index]}
          <button className="button" onClick={this.increment}>
            {" "}
            <img className="image" src={DoubleRightButton} />{" "}
          </button>
        </span>
      </div>
    );
  }
}

export default ThoughtToolCollection;

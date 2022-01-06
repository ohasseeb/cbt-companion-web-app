import ThoughtTool from "../thought-tools/thought-tool.component";
import AutoMaticThoughtImage from "../../ChallengeAutomaticThoughts.png";
import BrainImage from "../../Brain.png";
const ThoughtToolCollection = () => (
  <div>
    {" "}
    <ThoughtTool
      topicTitle={"Thought Tools"}
      exerciseTitles={["Challenge Automatic Thoughts", " Prediction"]}
      image={[AutoMaticThoughtImage, BrainImage]}
    />
    <ThoughtTool
      topicTitle={"Goals Values & Actions"}
      exerciseTitles={["Goal Setting", "Smart Goal Building"]}
      image={[AutoMaticThoughtImage, BrainImage]}
    />
    <ThoughtTool
      topicTitle={"Mindfulness Tools"}
      exerciseTitles={["Gratitude Checkin", "Reflection"]}
      image={[AutoMaticThoughtImage, BrainImage]}
    />
    <ThoughtTool
      topicTitle={"Sleep Nutrition & Activity"}
      exerciseTitles={["Log Sleep"]}
      image={[AutoMaticThoughtImage, BrainImage]}
    />
  </div>
);

export default ThoughtToolCollection;

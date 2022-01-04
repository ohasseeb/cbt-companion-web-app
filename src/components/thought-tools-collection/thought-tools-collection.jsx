import ThoughtTool from "../thought-tools/thought-tool.component";

const ThoughtToolCollection = () => (
  <div>
    {" "}
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
  </div>
);

export default ThoughtToolCollection;

import { useState } from "react";

const Header = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
);

const Button = ({ handleClick, text }) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
);

const StatisticsDisplay = ({ text, statisticData }) => (
  <div>
    <p>
      {text} {statisticData}
    </p>
  </div>
);

const App = () => {
  const headerText = "Provide Feedback";
  const statisticsText = "Statistics";

  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  const setGoodCounterToValue = (newValue) => () => {
    console.log("good counter value changed to ", newValue);
    setGoodCounter(newValue);
  };
  const setNeutralCounterToValue = (newValue) => () => {
    console.log("neutral counter value changed to ", newValue);
    setNeutralCounter(newValue);
  };
  const setBadCounterToValue = (newValue) => () => {
    console.log("bad counter value changed to ", newValue);
    setBadCounter(newValue);
  };

  return (
    <div>
      <Header text={headerText} />
      <Button
        handleClick={setGoodCounterToValue(goodCounter + 1)}
        text="Good"
      />
      <Button
        handleClick={setNeutralCounterToValue(neutralCounter + 1)}
        text="Neutral"
      />
      <Button handleClick={setBadCounterToValue(badCounter + 1)} text="Bad" />
      <Header text={statisticsText} />
      <StatisticsDisplay text={"Good"} statisticData={goodCounter} />
      <StatisticsDisplay text={"Neutral"} statisticData={neutralCounter} />
      <StatisticsDisplay text={"Bad"} statisticData={badCounter} />
    </div>
  );
};

export default App;

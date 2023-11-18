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

const StatisticLine = ({ text, statisticData }) => (
  <div>
    <p>
      {text} {statisticData}
    </p>
  </div>
);

/**
 * @param {Object} props - The props object
 * @param {Array} props.currentArray - The current array
 * @param {string} props.text - The text string
 */
const DisplayTotal = ({ text, currentArray }) => {
  console.log(
    "total counter is to be displayed \n this is current array:",
    currentArray
  );
  const totalCount = currentArray.length;
  return (
    <div>
      <p>
        {text} {totalCount}
      </p>
    </div>
  );
};

/**
 * @param {Object} props - The props object
 * @param {Array} props.currentArray - The current array
 * @param {string} props.text - The text string
 */
const DisplayAverage = ({ text, currentArray }) => {
  console.log(
    "average is calculated to be displayed \n this is current array:",
    currentArray
  );

  const sum = currentArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const totalCount = currentArray.length;
  let average = 0;
  if (totalCount !== 0) {
    average = sum / totalCount;
  }
  return (
    <div>
      <p>
        {text} {average}
      </p>
    </div>
  );
};

/**
 * @param {Object} props - The props object
 * @param {Array} props.currentArray - The current array
 * @param {string} props.text - The text string
 */
const DisplayPositiveStats = ({ text, currentArray }) => {
  console.log(
    "positive stats is calculated to be displayed \n this is current array:",
    currentArray
  );
  const sumOfPositives = currentArray
    .filter((element) => element > 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalCount = currentArray.length;
  let positive = 0;
  if (totalCount !== 0) {
    positive = (sumOfPositives / totalCount) * 100;
  }
  return (
    <div>
      <p>
        {text} {positive} %
      </p>
    </div>
  );
};

/**
 * @param {Object} props - The props object
 * @param {Array} props.statisticArray - The current stat_array
 * @param {int} props.goodCounter - The good counter
 * @param {int} props.neutralCounter - The neutral counter
 * @param {int} props.badCounter - The bad counter
 */
const Statistics = ({
  statisticArray,
  goodCounter,
  neutralCounter,
  badCounter,
}) => {
  // whether the array is empty or not
  if (statisticArray.length !== 0) {
    return (
      <div>
        <StatisticLine text={"Good"} statisticData={goodCounter} />
        <StatisticLine text={"Neutral"} statisticData={neutralCounter} />
        <StatisticLine text={"Bad"} statisticData={badCounter} />
        <DisplayTotal text={"all"} currentArray={statisticArray} />
        <DisplayAverage text={"average"} currentArray={statisticArray} />
        <DisplayPositiveStats text={"positive"} currentArray={statisticArray} />
      </div>
    );
  } else {
    return <div>No feedback was given.</div>;
  }
};

const App = () => {
  const headerText = "Provide Feedback";
  const statisticsText = "Statistics";

  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  const [statisticsArray, setFeeadbackArray] = useState([]);

  const setGoodCounterToValue = (newValue) => () => {
    console.log("good counter value changed to ", newValue);
    setGoodCounter(newValue);
    setFeeadbackArray([...statisticsArray, 1]);
  };
  const setNeutralCounterToValue = (newValue) => () => {
    console.log("neutral counter value changed to ", newValue);
    setNeutralCounter(newValue);
    setFeeadbackArray([...statisticsArray, 0]);
  };
  const setBadCounterToValue = (newValue) => () => {
    console.log("bad counter value changed to ", newValue);
    setBadCounter(newValue);
    setFeeadbackArray([...statisticsArray, -1]);
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
      <Statistics
        statisticArray={statisticsArray}
        goodCounter={goodCounter}
        neutralCounter={neutralCounter}
        badCounter={badCounter}
      />
    </div>
  );
};

export default App;

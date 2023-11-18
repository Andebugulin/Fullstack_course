import { useState } from "react";

/**
 * @param {Object} props - The props object
 * @param {int} props.selected - The current array
 * @param {int} props.maxNumber - The current array
 */
const RandomAnecdote = ({ selected, maxNumber, changeCurrentNumber }) => {
  const createRandomNumber = (old_number, maxNumber) => () => {
    const [min, max] = [0, maxNumber];
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(
      "random number generated:",
      randomNumber,
      "old number:",
      old_number
    );
    if (old_number !== randomNumber) {
      changeCurrentNumber(randomNumber);
    } else {
      return createRandomNumber(old_number, maxNumber)();
    }
  };
  return (
    <div>
      <button onClick={createRandomNumber(selected, maxNumber)}>
        random anecdote
      </button>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div>
      {anecdotes[selected]}
      <RandomAnecdote
        selected={selected}
        maxNumber={anecdotes.length - 1}
        changeCurrentNumber={setSelected}
      />
    </div>
  );
};

export default App;

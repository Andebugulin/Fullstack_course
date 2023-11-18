import { useState } from "react";

const Header = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
);

const AnecdoteWithMostVotes = ({ anecdotes, voteObject }) => {
  let maxVotes = 0;
  let maxVotesId = 0;
  for (let i = 0; i < anecdotes.length; i++) {
    if (voteObject[i] > maxVotes) {
      maxVotes = voteObject[i];
      maxVotesId = i;
    }
  }
  console.log(
    "AnecdoteWithMostVotes, current max votes:",
    maxVotes,
    "current votes",
    voteObject
  );
  return (
    <div>
      {anecdotes[maxVotesId]} <br /> {maxVotes} votes
    </div>
  );
};

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

const VoteForAnecdote = ({ selected, voteObject, changeVoteObject }) => {
  const addVote = () => {
    changeVoteObject(() => {
      const newVote = { ...voteObject };
      console.log(
        "vote changed\n",
        "id",
        selected,
        "new vote count",
        newVote[selected] + 1
      );
      newVote[selected] = newVote[selected] + 1;
      return newVote;
    });
  };

  return (
    <div>
      <button onClick={addVote}>vote</button>
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
  const [voteObject, setVoteObject] = useState(() => {
    const initialVote = {};
    for (let i = 0; i < anecdotes.length; i++) {
      initialVote[i] = 0;
    }
    return initialVote;
  });
  return (
    <div>
      <Header text={"Anecdote of the day"} />
      {anecdotes[selected]} <br />
      {voteObject[selected]} votes <br />
      <VoteForAnecdote
        selected={selected}
        voteObject={voteObject}
        changeVoteObject={setVoteObject}
      />
      <RandomAnecdote
        selected={selected}
        maxNumber={anecdotes.length - 1}
        changeCurrentNumber={setSelected}
      />
      <Header text={"Anecdote with most votes"} />
      <AnecdoteWithMostVotes voteObject={voteObject} anecdotes={anecdotes} />
    </div>
  );
};

export default App;

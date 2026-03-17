import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVote] = useState(Array(8).fill(0));

  const voteFor = () => {
    setVote((prevVotes) => {
      const newVotes = [...prevVotes];
      newVotes[selected] += 1;
      return newVotes;
    });
  };

  const randomA = () =>
    setSelected(crypto.getRandomValues(new Uint32Array(1))[0] % 8);

  const vote = () => votes[selected]++;

  const mostVote = () => {
    let maxi = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > votes[maxi]) maxi = i;
    }
    return anecdotes[maxi];
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdotes anecdote={anecdotes[selected]} />
      <Vote cnt={votes[selected]} />
      <Button onClick={randomA} text="Next" />
      <Button onClick={voteFor} text="vote" />
      <h1>Anecdote with most votes</h1>
      <Anecdotes anecdote={mostVote()} />
    </div>
  );
};

const Anecdotes = ({ anecdote }) => <p>{anecdote}</p>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Vote = ({ cnt }) => <p>Votes: {cnt}</p>;

export default App;

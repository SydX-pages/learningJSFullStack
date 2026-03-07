import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [feedBacks, setFBack] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  return (
    <div>
      <Feedback feedBacks={feedBacks} setFBack={setFBack} />
      <Static feedBacks={feedBacks} />
    </div>
  );
};

const Feedback = ({ feedBacks, setFBack }) => {
  const setGood = () => setFBack({ ...feedBacks, Good: feedBacks.Good + 1 });
  const setNeutral = () =>
    setFBack({ ...feedBacks, Neutral: feedBacks.Neutral + 1 });
  const setBad = () => setFBack({ ...feedBacks, Bad: feedBacks.Bad + 1 });

  return (
    <div>
      <Title text="Send Feedback" />
      <Button onClick={setGood} text="good" />
      <Button onClick={setNeutral} text="neutral" />
      <Button onClick={setBad} text="bad" />
    </div>
  );
};

const Static = ({ feedBacks }) => {
  if (feedBacks.Good === 0 && feedBacks.Neutral === 0 && feedBacks.Bad === 0)
    return (
      <>
        <p>No Feedbacks Yet! </p>
      </>
    );

  return (
    <div>
      <Title text="Static" />
      <InfoStat fbk="Good" num={feedBacks.Good} />
      <InfoStat fbk="Neutral" num={feedBacks.Neutral} />
      <InfoStat fbk="Bad" num={feedBacks.Bad} />
      <Score feedBacks={feedBacks} />
    </div>
  );
};

const Score = ({ feedBacks }) => {
  const [goodNum, neuNum, badNum] = [
    feedBacks.Good,
    feedBacks.Neutral,
    feedBacks.Bad,
  ];

  console.log(goodNum);
  const totalNum = goodNum + neuNum + badNum;
  const average = totalNum === 0 ? 0 : (goodNum - badNum) / totalNum;
  const posRate = totalNum === 0 ? 0 : goodNum / totalNum;
  return (
    <>
      <p>average: {average}</p>
      <p>positive: {posRate}</p>
    </>
  );
};

const Title = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const InfoStat = ({ fbk, num }) => (
  <p>
    {fbk}: {num}
  </p>
);

export default App;

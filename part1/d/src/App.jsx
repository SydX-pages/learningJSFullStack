import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);

  const setLeft = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
    setAll(allClicks.concat("L"));
  };
  const setRight = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
    setAll(allClicks.concat("R"));
  };

  return (
    <div>
      {clicks.left}
      <Button onClick={setLeft} text="Left" />
      <Button onClick={setRight} text="Right" />
      {clicks.right}
      <History allClicks={allClicks} />
    </div>
  );
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0)
    return <div>the app is used by press the button</div>;
  return <div>{allClicks.join(" ")}</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default App;

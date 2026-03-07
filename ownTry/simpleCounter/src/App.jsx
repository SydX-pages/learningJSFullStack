import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increaseByOne = () => setCount(count + 1);
  const decreseByOne = () => setCount(count - 1);
  const setZero = () => setCount(0);

  return (
    <div>
      <Counter count={count} />
      <Button onClick={increaseByOne} text="add" />
      <Button onClick={decreseByOne} text="minus" />
      <Button onClick={setZero} text="zero" />
    </div>
  );
}

const Counter = ({ count }) => <div>{count}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default App;

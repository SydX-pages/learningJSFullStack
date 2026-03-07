/*
// 辅助函数与变量解构
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Sydwen";
  const age = 20;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Alissa" age={15 + 3} />
      <Hello name={name} age={age} />
    </div>
  );
};
*/

/*
// 多次调用render重新渲染组件
const App = ({ counter }) => {
  return <div>{counter}</div>;
};
*/

import { useState } from "react";
/*
// 带状态的组件
const App = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => setCounter(counter + 1), 1000);
  return <div>{counter}</div>;
};
*/

const Display = ({ counter }) => <div>{counter}</div>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCount(counter + 1);
  const setToZero = () => setCount(0);
  const decreaseByOne = () => setCount(counter - 1);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default App;

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamental of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = "Number of exercises";

  const parts = [part1, part2, part3];
  const exes = [exercises1, exercises2, exercises3];
  return (
    /*
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
    */
    /*
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total text={total} cnt={exercises1 + exercises2 + exercises3} />
    </div>
    */
    <div>
      <Header course={course} />
      <Content pts={parts} exs={exes} />
      <Total text={total} cnt={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

const Header = (props) => {
  console.log(props);

  return (
    <div>
      <p>{props.course}</p>
    </div>
  );
};
/*
const Content = (props) => {
  console.log(props);

  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};
*/

const Content = (props) => {
  console.log(props);
  const pts = props.pts,
    exs = props.exs;
  return (
    <div>
      <Part part={pts[0]} exe={exs[0]} />
      <Part part={pts[1]} exe={exs[1]} />
      <Part part={pts[2]} exe={exs[2]} />
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exe}
      </p>
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.cnt}
      </p>
    </div>
  );
};

export default App;

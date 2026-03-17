const Courses = ({ courses }) =>
  courses.map((course) => <Course key={course.id} course={course} />);

const Course = ({ course }) => {
  return (
    <>
      <Header key={course.id} head={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

const Header = ({ head }) => <h1>{head}</h1>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exe={part.exercises} />
      ))}
      <Total parts={parts} />
    </>
  );
};

const Part = ({ name, exe }) => (
  <p>
    {name} {exe}
  </p>
);

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <b>Total:{total}</b>;
};

export default Courses;

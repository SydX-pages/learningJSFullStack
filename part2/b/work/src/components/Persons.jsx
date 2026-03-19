const Persons = ({ persons, deleteObj }) => {
  return (
    <>
      {persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          deleteObj={deleteObj}
          id={person.id}
        />
      ))}
    </>
  );
};

const Person = ({ name, number, deleteObj, id }) => (
  <p>
    <button onClick={() => deleteObj(id, name)}>Delete</button>
    {name}:{number}
  </p>
);

export default Persons;

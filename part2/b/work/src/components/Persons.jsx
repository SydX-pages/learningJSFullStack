import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import srv from "../srv/srv";

const Persons = ({ persons, deleteObj, showUpdate, setShowUpdate }) => {
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

const Person = ({ name, number, deleteObj, id }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [newnumber, setNewNumber] = useState("");
  const handleNewNumberChange = (event) => setNewNumber(event.target.value);

  const updatePersonNumber = (event) => {
    event.preventDefault();
    const newPerson = {
      name: name,
      number: newnumber,
    };

    srv.updateObj(id, newPerson);
  };

  return (
    <p>
      <button onClick={() => deleteObj(id, name)}>Delete</button>
      {name}:{number}
      <button onClick={() => setShowUpdate(!showUpdate)}>Update Number</button>
      {showUpdate ? (
        <UpdateForm
          onChange={handleNewNumberChange}
          onSubmit={updatePersonNumber}
        />
      ) : (
        ``
      )}
    </p>
  );
};
const UpdateForm = ({ onChange, onSubmit }) => (
  <>
    <form onSubmit={onSubmit}>
      <Input text="new number" onChange={onChange} />
      <Button type="submit" text="update" />
    </form>
  </>
);

export default Persons;

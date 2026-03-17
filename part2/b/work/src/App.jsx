import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase()),
  );

  const objEqual = (a, b) => {
    if (a === b) return true;
    if (
      typeof a !== "object" ||
      typeof b !== "object" ||
      a === null ||
      b === null
    )
      return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!objEqual(a[key], b[key])) return false;
    }
    return true;
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (newNumber === "" || newName === "") {
      setNewName("");
      setNewNumber("");
      alert("Msg loss");
      return;
    }

    const personObj = {
      name: newName,
      number: newNumber,
    };

    for (let i = 0; i < persons.length; i++) {
      if (objEqual(personObj, persons[i])) {
        setNewName("");
        setNewNumber("");
        alert("$(newName) is alreadey added");
        return;
      }
    }

    setPersons(persons.concat(personObj));
    setNewName("");
    setNewNumber("");
  };

  const handleNameInput = (event) => setNewName(event.target.value);
  const handleNumberInput = (event) => setNewNumber(event.target.value);
  const handleFilterInput = (event) => setNewFilter(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>

      <Input
        text="filter with"
        value={newFilter}
        onChange={handleFilterInput}
      />

      <h3>Add New</h3>
      <form onSubmit={addPerson}>
        <Input text="name" value={newName} onChange={handleNameInput} />
        <Input text="number" value={newNumber} onChange={handleNumberInput} />
        <button type="submit">add</button>
      </form>

      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <p key={person.name}>
          {person.name}: {person.number}
        </p>
      ))}
    </div>
  );
};

const Input = ({ text, value, onChange }) => (
  <div>
    {text}
    <input value={value} onChange={onChange} />
  </div>
);

export default App;

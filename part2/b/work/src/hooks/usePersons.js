import { useState, useEffect } from "react";

import srv from "../srv/srv";

const usePersons = () => {
  //stateVar
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  //Initial Info From db.json
  useEffect(() => {
    srv.getAll().then((initalPersons) => setPersons(initalPersons));
  }, []);

  //Filtered persons
  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase()),
  );

  //util
  const objEqual = (a, b) => {
    if (a === b) return true;
    if (
      typeof a !== "object" ||
      typeof b !== "object" ||
      a === null ||
      b === null
    )
      return false;

    const keysA = Object.keys(a).filter((k) => k !== "id");
    const keysB = Object.keys(b).filter((k) => k !== "id");

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!objEqual(a[key], b[key])) return false;
    }
    return true;
  };

  //Frontend Interface
  const addPerson = (event) => {
    event.preventDefault();

    if (newNumber === "" || newName === "") {
      setNewName("");
      setNewNumber("");
      alert("Msg loss");
      return;
    }

    for (let i = 0; i < persons.length; i++) {
      if (newName === persons[i].name) {
        if (newNumber === persons[i].number) {
          setNewName("");
          setNewNumber("");
          alert(`${newName} is already added`);
          return;
        } else {
          if (
            !window.confirm(
              `${newName} is already added, replace the old number with a new one?`,
            )
          )
            return;
          const id = persons[i].id;
          updatePerson(id);
          return;
        }
      }
    }
    const personObj = {
      name: newName,
      number: newNumber,
    };

    srv.createObj(personObj).then((newPerson) => {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const deleteObj = (id, name) => {
    if (!window.confirm(`Delete ${name}?`)) return;
    srv.deleteObj(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  const updatePerson = (id) => {
    const personObj = {
      id: id,
      name: newName,
      number: newNumber,
    };
    srv.updateObj(id, personObj).then((updatedPerson) => {
      setPersons(
        persons.map((person) => (person.id === id ? updatedPerson : person)),
      );
      setNewName("");
      setNewNumber("");
    });
  };

  const handleNameInput = (event) => setNewName(event.target.value);
  const handleNumberInput = (event) => setNewNumber(event.target.value);
  const handleFilterInput = (event) => setNewFilter(event.target.value);

  return {
    newName,
    newNumber,
    newFilter,
    addPerson,
    personsToShow,
    handleNameInput,
    handleNumberInput,
    handleFilterInput,
    deleteObj,
  };
};

export default usePersons;

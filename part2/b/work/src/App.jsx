import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import usePersons from "./hooks/usePersons";

const App = () => {
  const {
    newName,
    newNumber,
    newFilter,
    addPerson,
    personsToShow,
    handleNameInput,
    handleNumberInput,
    handleFilterInput,
    deleteObj,
  } = usePersons();

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={newFilter} onChange={handleFilterInput} />

      <h3>Add New</h3>

      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        onNameChange={handleNameInput}
        onNumberChange={handleNumberInput}
      />

      <h2>Numbers</h2>

      <Persons persons={personsToShow} deleteObj={deleteObj} />
    </div>
  );
};

export default App;

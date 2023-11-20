import { useState } from "react";

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

/**
 *
 * @param {Array} persons
 */
const PhonebookForm = ({ persons, setPersons, newName, setNewName }) => {
  const addPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists | (newName === "")) {
      alert(
        "Name:" +
          newName +
          "already exists or empty! Please use a different name."
      );
      console.log(
        "Name: ${newName} already exists! Please use a different name."
      );
      return;
    } else {
      console.log("adding a person \n name:", newName);

      console.log("new person has", newName, "name", "id:", persons.length);
      setPersons([...persons, { id: persons.length, name: newName }]);
      setNewName("");
    }
  };

  const handlePersonChange = (event) => {
    console.log("typing into a person form, \nsomething:", event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        name:
        <input value={newName} onChange={handlePersonChange} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

const NumbersRender = ({ person }) => {
  return <li>{person.name}</li>;
};

const App = () => {
  const [persons, setPersons] = useState([{ id: 0, name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("Dartanyan");

  return (
    <div>
      <Header text="Phonebook" />
      <PhonebookForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
      />
      <Header text="Numbers" />
      <ul>
        {persons.map((person) => (
          <NumbersRender key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;

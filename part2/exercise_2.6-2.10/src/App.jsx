import { useState, useEffect } from "react";
import axios from "axios";

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

const Filter = ({ setToFilterData, setFilter, setFilteredData, persons }) => {
  const handleFilterChange = (event) => {
    console.log("filter:", event.target.value);
    const newFilter = event.target.value.toLowerCase();
    setFilter(newFilter);
    const filteredData = persons.filter((person) =>
      person.name.toLowerCase().startsWith(newFilter)
    );
    console.log("filtered data: ", filteredData);
    setFilteredData(filteredData);
    if (event.target.value === "") {
      setToFilterData(false);
      console.log("do we need to filter data?: no");
    } else {
      console.log("do we need to filter data?: yes");
      setToFilterData(true);
    }
  };
  return (
    <div>
      <form>
        <div>
          filter:
          <input onChange={handleFilterChange} />
        </div>
      </form>
    </div>
  );
};

/**
 *
 * @param {Array} persons
 */
const PhonebookForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newPhone,
  setNewPhone,
}) => {
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

      console.log(
        "new person has",
        newName,
        "name",
        "phone:",
        newPhone,
        "id:",
        persons.length + 1
      );
      setPersons([
        ...persons,
        { id: persons.length + 1, name: newName, phone: newPhone },
      ]);
      setNewName("");
      setNewPhone("");
    }
  };

  const handlePersonChange = (event) => {
    console.log(
      "typing into a person change name form, \nsomething:",
      event.target.value
    );
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(
      "typing into a person phone form, \nsomething:",
      event.target.value
    );
    setNewPhone(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          phone:
          <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

const NumbersRender = ({ person }) => {
  return (
    <li>
      {person.name} {person.phone}
    </li>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { id: 0, name: "Arto Hellas", phone: "+123345456567" },
  ]);

  const [newName, setNewName] = useState("Dartanyan");
  const [newPhone, setNewPhone] = useState("+123123234345");

  const [toFilterData, setToFilterData] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(persons);

  useEffect(() => {
    console.log("effect");

    const eventHandler = (response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    };

    const promise = axios.get("http://localhost:3001/persons");
    promise.then(eventHandler);
  }, []);

  return (
    <div>
      <Header text="Phonebook" />
      <Filter
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        setFilter={setFilter}
        persons={persons}
        setToFilterData={setToFilterData}
      />
      <Header text="add a new" />
      <PhonebookForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
      />
      <Header text="Numbers" />
      <ul>
        {toFilterData
          ? filteredData.map((person) => (
              <NumbersRender key={person.id} person={person} />
            ))
          : persons.map((person) => (
              <NumbersRender key={person.id} person={person} />
            ))}
      </ul>
    </div>
  );
};

export default App;

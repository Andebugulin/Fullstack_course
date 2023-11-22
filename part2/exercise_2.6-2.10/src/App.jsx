import { useState, useEffect } from "react";
import personServices from "./services/persons";
import PhonebookForm from "./components/phoneBookForm";
import Filter from "./components/Filter";

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

const NumbersRender = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    personServices.getAll().then((newPersons) => {
      console.log("promise fulfilled");
      setPersons(newPersons);
    });
  }, []);

  console.log("persons:", persons);

  return (
    <div>
      <Header text="Phonebook" />
      <Filter setFilter={setFilter} />
      <Header text="add a new" />
      <PhonebookForm persons={persons} setPersons={setPersons} />
      <Header text="Numbers" />
      <ul>
        {persons
          .filter((person) => person.name.toLowerCase().startsWith(filter))
          .map((person) => (
            <NumbersRender key={person.id} person={person} />
          ))}
      </ul>
    </div>
  );
};

export default App;

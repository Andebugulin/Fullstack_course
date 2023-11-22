import personServices from "../services/persons";
import { useState } from "react";
/**
 * @param {Array} persons
 * @param {String} newName
 * @param {String} newPhone
 */
const PhonebookForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("Dartanyan");
  const [newPhone, setNewPhone] = useState("+123123234345");

  const addPerson = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists | (newName === "")) {
      alert("Name: " + newName + "  ! Please use a different name !");
      console.log("Name:", newName, "! Please use a different name !");
      return;
    } else {
      const newPerson = {
        name: newName,
        number: newPhone,
      };

      console.log("new person:", newPerson);

      personServices.create(newPerson).then((returnedPerson) => {
        setPersons([...persons, returnedPerson]);
        setNewName("");
        setNewPhone("");
      });
    }
  };

  const handlePersonChange = (event) => {
    const typedName = event.target.value;
    console.log("newName", typedName);
    setNewName(typedName);
  };
  const handlePhoneChange = (event) => {
    const typedPhone = event.target.value;
    console.log("typedPhone", typedPhone);
    setNewPhone(typedPhone);
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

export default PhonebookForm;

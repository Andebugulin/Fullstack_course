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

  const updatingPhone = () => {
    const oldPerson = persons.find((person) => person.name === newName);
    const newPerson = {
      ...oldPerson,
      number: newPhone,
    };
    console.log("new phone:", newPhone, "oldPerson:", oldPerson);
    personServices
      .update(oldPerson.id, newPerson)
      .then((updatedPerson) => {
        console.log(
          "updating person, \n oldPerson:",
          oldPerson,
          "\n newPerson",
          updatedPerson
        );
        setPersons(
          persons.map((person) =>
            person.id === oldPerson.id ? updatedPerson : person
          )
        );
      })
      .catch((error) => {
        alert(`the person was already deleted from server`);
        setPersons(persons.filter((person) => person.id !== oldPerson.id));
      });
  };

  const handleConfirmation = () => {
    const confirmed = window.confirm(
      "Are you sure you want to update" +
        newName +
        " with new phone:" +
        newPhone +
        "?"
    );
    if (confirmed) {
      updatingPhone();
    }
  };

  const addPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);
    if (newName === "") {
      alert(
        "Name: " +
          newName +
          "  ! Please, use a different name, your current name is empty !"
      );
      console.log(
        "Name:",
        newName,
        "! Please, use a different name, your current name is empty !"
      );
      return;
    }
    if (nameExists) {
      handleConfirmation();
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

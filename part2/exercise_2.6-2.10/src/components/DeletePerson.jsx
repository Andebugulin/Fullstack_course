import personServices from "../services/persons";

const DeleteButton = ({ text, callToDo }) => {
  return (
    <div>
      <button onClick={callToDo}>{text}</button>
    </div>
  );
};

const DeletePerson = ({ person, persons, setPersons }) => {
  const deletingPerson = () => {
    console.log("deleting a person with id:", person.id, "\nperson:", person);
    personServices
      .deleteOne(person.id)
      .then(() => {
        setPersons(
          persons.filter(
            (personaOfPersons) => personaOfPersons.id !== person.id
          )
        );
      })
      .catch((error) => console.error("Error deleting person:", error));
  };

  return (
    <div>
      <DeleteButton text="delete" callToDo={deletingPerson} />
    </div>
  );
};

export default DeletePerson;

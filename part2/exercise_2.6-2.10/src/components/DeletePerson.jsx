import personServices from "../services/persons";

const DeleteButton = ({ text, onConfirm }) => {
  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      onConfirm();
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>{text}</button>
    </div>
  );
};

const DeletePerson = ({ person, persons, setPersons, setNotification }) => {
  const deletingPerson = () => {
    console.log("deleting a person with id:", person.id, "\nperson:", person);
    personServices
      .deleteOne(person.id)
      .then(() => {
        const oldPerson = person;
        setPersons(
          persons.filter(
            (personaOfPersons) => personaOfPersons.id !== person.id
          )
        );
        setNotification(`removal of '${oldPerson.name}' was successful `);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
      .catch((error) => console.error("Error deleting person:", error));
  };

  return (
    <div>
      <DeleteButton text="delete" onConfirm={deletingPerson} />
    </div>
  );
};

export default DeletePerson;

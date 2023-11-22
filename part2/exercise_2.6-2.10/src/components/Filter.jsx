const Filter = ({ setFilter }) => {
  const handleFilterChange = (event) => {
    const newFilter = event.target.value.toLowerCase();
    setFilter(newFilter);
    console.log("newFilter:", newFilter);
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

export default Filter;

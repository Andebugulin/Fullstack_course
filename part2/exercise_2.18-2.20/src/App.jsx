import { useState, useEffect } from "react";
import axios from "axios";

const DisplayCountryData = ({ countryData }) => {
  console.log(countryData);
  const officialName = countryData.name.official;
  const capitalName = countryData.capital;
  const area = countryData.area;
  const languages = countryData.languages;
  const flagImageHref = countryData.flags.png;
  const flagAlt = countryData.flags.alt;
  console.log("languages", languages);

  return (
    <div>
      <div>
        <h1>{officialName}</h1>
        <p>capital: {capitalName}</p>
        <p>area: {area}</p>
        <h2>languages</h2>
        <ul>
          {Object.entries(languages).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>

        <img alt={flagAlt} src={flagImageHref} />
      </div>
    </div>
  );
};

/**
 *
 * @param {Array} country
 * @returns
 */
const CountryDisplay = ({ country }) => {
  console.log("displaying country");
  if (country.length >= 10) {
    return <div>Too many matches, specify another filter!</div>;
  } else if (country.length >= 2) {
    return (
      <ol>
        {country.map((countryName, index) => (
          <li key={index}>{countryName.name.official}</li>
        ))}
      </ol>
    );
  } else if (country.length === 1) {
    return <DisplayCountryData countryData={country[0]} />;
  } else if (country.length === 0) {
    return <div>No matches found.</div>;
  }
};

const Filter = ({ filter, setFilter, setCountry, countries }) => {
  const handleFilterChange = (event) => {
    event.preventDefault();
    const newFilter = event.target.value.toLowerCase();
    setFilter(newFilter);
    console.log("newFilter:", newFilter);

    const filteredCountries = countries.filter((country) =>
      country.name.official.toLowerCase().includes(newFilter.toLowerCase())
    );
    setCountry(filteredCountries);
    console.log("filteredCountries", filteredCountries);
  };

  return (
    <div>
      <form>
        find country: <input value={filter} onChange={handleFilterChange} />
      </form>
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect run, currency is now", country);
    console.log("fetching exchange rates...");
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  return (
    <div>
      <Filter
        filter={filter}
        setFilter={setFilter}
        setCountry={setCountry}
        countries={countries}
      />
      <CountryDisplay country={country} />
    </div>
  );
};

export default App;

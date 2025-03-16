import './App.css';

import React, { useEffect, useState } from "react";

import Card from './component/Card';

function App() {

  const URL = 'https://countries-search-data-prod-812920491762.asia-south1.run.app/countries';

  const [countryList, setcountryList] = useState([]);
  const [filteredCountryList, setfilteredCountryList] = useState([]);
  const [countries, setcountries] = useState('');

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setcountryList(data)
        setfilteredCountryList(data)
      }).catch(error => console.error("Error fetching data: ", error));
  }, []);

  const handleSearch = (e) => {

    const value = e.target.value.toLowerCase();
    setcountries(value);

    const filtered = countryList.filter((country) =>
      country.common.toLowerCase().startsWith(value));

    setfilteredCountryList(filtered);
  }

  return (
    <div className="App">
      <input type='text' value={countries} onChange={handleSearch} placeholder='Search for Countries' />
      <div className='countriesList'>
        {filteredCountryList.map(country => <Card country={country} />)}
      </div>
    </div>
  );
}

export default App;

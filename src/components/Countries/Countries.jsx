import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])
  const [visitedFlags, setVisitedFlags] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = country =>{
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    
  }

  const handleVisitedFlags = flag =>{
    console.log("flag added")
    const newVisitedFlag = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlag)
  }
  return (
    <div>
      <h1>Countries : {countries.length}</h1>
      <div>
        <h3>Visited Countries : {visitedCountries.length}</h3>
        <ul>
            {
                visitedCountries.map(country => 
                    <li key={country.cca3}>{country.name.common}</li>
                )
            }
                
        </ul>
      </div>

      <div>
        <h3>Visited Flag : {visitedFlags.length} </h3>
        <div className="flag-container">
            {
                visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img> )
            }
        </div>
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country 
          key={country.cca3} 
          country={country}
          handleVisitedCountries = {handleVisitedCountries}
          handleVisitedFlags = {handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

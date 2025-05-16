import React, { useState } from 'react';
import '../Css/2.css';


const Countries = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${query}`); 
    const json = await res.json();
    setCountries(json);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌍 Елдер туралы мәлімет</h1>
      <input className="border p-2 rounded mr-2" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ел атауы" />
      <button onClick={fetchCountries} className="bg-blue-500 text-white p-2 rounded">Іздеу</button>
      {countries.status === 404 ? (
        <p className="text-red-500 mt-4">Бұл ел жоқ</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {countries.map((country) => (
            <div key={country.cca3} className="bg-white shadow p-4 rounded">
              <h3 className="font-semibold">{country.name.common}</h3>
              <p>Астанасы: {country.capital?.[0]}</p>
              <p>Халқы: {country.population.toLocaleString()}</p>
              <img src={country.flags.png} alt="Туы" className="mt-2 w-24" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
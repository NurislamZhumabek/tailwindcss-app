import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  const fetchWeather = async () => {
    const apiKey = 'your_actual_openweather_api_key';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (res.ok) {
      const json = await res.json();
      setData(json);
    } else {
      setData({ error: 'Бұл ауа райы жоқ.' });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🌦 Ауа райын тексеру</h1>
      <input className="border p-2 rounded mr-2" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Қала атауы" />
          <button onClick={fetchWeather} className="bg-blue-500 text-white p-2 rounded">Іздеу</button>
      {data && data.main && (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <p>Температура: {data.main.temp}°C</p>
          <p>Сипаттама: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};


export default Weather;
import React, { useState } from 'react';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const apiKey = 'your_actual_tmdb_api_key';
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const json = await res.json();
    if (json.results.length === 0) {
      alert('Бұл фильм жоқ');
    } else {
      setMovies(json.results);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎬 Фильм іздеу</h1>
      <input className="border p-2 rounded mr-2" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Фильм атауы" />
      <button onClick={fetchMovies} className="bg-blue-500 text-white p-2 rounded">Іздеу</button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {Array.isArray(movies) && movies.map((movie) => (
          <div key={movie.id} className="bg-white shadow p-2 rounded">
            <h3 className="font-semibold">{movie.title}</h3>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="mt-2 rounded" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
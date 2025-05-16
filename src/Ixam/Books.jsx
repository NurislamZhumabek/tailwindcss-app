import React, { useState } from 'react';

const Books = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const json = await res.json();
    setBooks(json.items || []);
  };

  return (
    <div className="">
      <h1 className="">📚 Кітап іздеу</h1>
      <input className="border p-2 rounded mr-2" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Кітап атауы" />
      <button onClick={fetchBooks} className="bg-blue-500 text-white p-2 rounded">Іздеу</button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="bg-white shadow p-4 rounded border border-gray-200">
              <h3 className="font-semibold">{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors?.join(', ')}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500"></p>
        )}
      </div>
    </div>
  );
};

export default Books;
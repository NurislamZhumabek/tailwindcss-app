import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Weather from '../pages/Weather';
import Movies from '../pages/Movies';
import Books from '../pages/Books';
import Countries from '../pages/Countries';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Weather from './Weather';
import Movies from './Movies';
import Books from './Books';
import Countries from './Countries';
import Genimi from './Genimi';

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
          <Route path="/genimi" element={ <Genimi/> } />
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
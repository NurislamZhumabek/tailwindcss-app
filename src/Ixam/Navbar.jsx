import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/1.css';

const Navbar = () => {
  return (
    <nav>
          <header>
          <Link to="/" className="nav-link">Ауа райы</Link>
          <Link to="/movies" className="nav-link">Фильмдер</Link>
          <Link to="/books" className="nav-link">Кітаптар</Link>
          <Link to="/countries" className="nav-link">Елдер</Link>  
          <Link to="/genimi" className="nav-link">Сұрақ</Link>  
          </header>
    </nav>
        
  );
};
export default Navbar;
















    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">mottor</div>
        <div className="footer-contact">
          <span>📧 nurislamzumabek49@gamail.com</span>
          <span>📞 +7 776 212 23 33</span>
        </div>
        <button className="footer-button">Создать сайт бесплатно</button>
      </div>
    </footer>
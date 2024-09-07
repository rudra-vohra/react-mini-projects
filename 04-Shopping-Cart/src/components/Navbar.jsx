import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ size }) => {
  return (
    <nav>
      <div className="nav-box">
        <h1 className="logo">
          <Link to="/">Shop</Link>
        </h1>
        <div className="cart">
          <span>
            <Link to="/cart">
              <i className="fas fa-cart-shopping"></i>
            </Link>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

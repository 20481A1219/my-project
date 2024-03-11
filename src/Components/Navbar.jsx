import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="flex">
          <NavLink to="/"><li activeClassName="active">Dashboard</li></NavLink>
          <NavLink to="/products"><li>Products</li></NavLink>
          <NavLink to="/orders"><li>Orders</li></NavLink>
          <NavLink to="/calendar"><li>Calendar View</li></NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// frontend/src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Smart Task Manager</h1>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

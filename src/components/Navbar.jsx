import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="mr-4">Movies</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Insert from './Insert';
import Search from './Search';

const Navbar = () => {
  return (
    <>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/insert">Add Student</Link>
        </li>
        <li>
          <Link to="/search">View Student</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/insert" element={<Insert />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </>
  );
};

export default Navbar;

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/messages">Messages</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

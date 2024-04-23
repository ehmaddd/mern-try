import React from 'react';
import { Link } from 'react-router-dom';
import Webroutes from './Webroutes';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/messages">Messages</Link></li>
        </ul>
      </nav>
      <Webroutes />
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import Webroutes from './Webroutes';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/insert">Insert</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
      <Webroutes />
    </>
  );
};

export default Navbar;

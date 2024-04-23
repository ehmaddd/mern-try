import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './style.css';

const Update = () => {

  return (
    <>
      <div class="grid-container">
        <div class="box top-box">
          <Link className="home-link" to="/">H O M E</Link>
        </div>
        <div class="box top-box">
          <h1 className="header">STUDENTS MANAGEMENT SYSTEM</h1>
        </div>
        <div class="box bottom-box nav-box">
            <Navbar />
        </div>
        <div class="box bottom-box data-box">
          <h1 className="title">U P D A T E</h1>
        </div>
      </div>
    </>
)};

export default Update;

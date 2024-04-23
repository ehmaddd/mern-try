import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './style.css';

const Delete = () => {

  return (
    <>
      <div class="grid-container">
        <div class="box top-box">
          <Link className="home-link" to="/">H O M E</Link>
        </div>
        <div class="box top-box">
          <h1>STUDENTS MANAGEMENT SYSTEM</h1>
        </div>
        <div class="box bottom-box nav-box">
            <Navbar />
        </div>
        <div class="box bottom-box data-box">
          <h1>D E L E T E</h1>
        </div>
      </div>
    </>
)};

export default Delete;

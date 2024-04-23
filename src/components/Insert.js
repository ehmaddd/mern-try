import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Insert = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/data', { // Updated URL
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
      name: name
    }),
   });
  }

  return (
    <>
    <div class="container">
    <div class="box left-1-3"><Link to="/">HOME</Link></div>
    <div class="box right-3-4">
      <h1>D A T A</h1>
    </div>
    <div class="box left-1-3">
        <Navbar />
    </div>
    <div class="box right-3-4">
    <div>
      <h1>I N S E R T</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
    </div>
  </>
);
};

export default Insert;

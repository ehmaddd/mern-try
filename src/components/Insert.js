import React, { useState } from 'react';

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
    <div>
      <h1>I N S E R T</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Insert;

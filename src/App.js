import React, { useEffect, useState } from 'react';

const App = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [searchId, setSearchId] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

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
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/dataget', { // Updated URL
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: searchId,
    }),
  });
  const data = await response.json();
  console.log(data);
  setMessage(data.name);
  };

  const fetchData = async (e) => {
    const response = await fetch('http://localhost:4000/api/datafetch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: searchId,
    }),
  });
  const data = await response.json();
  console.log(data);
  setMessage(data.name);
  }

  useEffect(()=> {
    fetchData();
  }, [])

  return (
    <>
    <div>
      <h1>Send Data</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div>
    <h1>Receive Data</h1>
    <form onSubmit={handleSubmit2}>
      <input type="text" placeholder="id" value={searchId} onChange={(e) => setSearchId(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
    <p>{message}</p>
  </div>
    </>
  );
};

export default App;

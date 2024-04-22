import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async (e) => {
    const fetchResponse = await fetch('http://localhost:4000/api/datafetch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const fetchedData = await fetchResponse.json();
  setData(fetchedData);
  }

  useEffect(()=> {
    fetchData();
  }, [])

  return (
    <div>
      <h1>DATA</h1>
      <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {data.map((datum) => (
      <tr key={datum.id}>
        <td>{datum.id}</td>
        <td>{datum.name}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

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
    <>
      <div class="container">
      <div class="box left-1-3">Left 1/3</div>
      <div class="box right-3-4">
        <h1>D A T A</h1>
      </div>
      <div class="box left-1-3">
          <Navbar />
      </div>
      <div class="box right-3-4">
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
      </div>
    </>


  );
};

export default Home;

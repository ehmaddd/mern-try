import { useState } from "react";

const Search = () => {
  const [searchId, setSearchId] = useState('');
  const [message, setMessage] = useState('');

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
  setMessage(data.name);
  };

  return (
    <div>
    <h1>Receive Data</h1>
    <form onSubmit={handleSubmit2}>
      <input type="text" placeholder="id" value={searchId} onChange={(e) => setSearchId(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
    <p>{message}</p>
  </div>
  );

}


export default Search;

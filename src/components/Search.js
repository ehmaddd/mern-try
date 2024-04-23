import { useState } from "react";
import Navbar from './Navbar';

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
    <div>
    <h1>S E A R C H</h1>
    <form onSubmit={handleSubmit2}>
      <input type="text" placeholder="id" value={searchId} onChange={(e) => setSearchId(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
    <p>{message}</p>
  </div>
  </div>
    </div>
  </>
);
}


export default Search;

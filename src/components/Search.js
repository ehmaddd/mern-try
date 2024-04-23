import { useState } from "react";
import Navbar from './Navbar';
import { Link } from "react-router-dom";

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
          <h1>S E A R C H</h1>
          <form onSubmit={handleSubmit2}>
            <input type="text" placeholder="id" value={searchId} onChange={(e) => setSearchId(e.target.value)}/>
            <button type="submit">Submit</button>
          </form>
          <p>{message}</p>
        </div>
      </div>
    </>
)};


export default Search;

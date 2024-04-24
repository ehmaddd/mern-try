import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './style.css';


const Update = () => {
  const [data, setData] = useState([]);
  const [searchId, setSearchId] = useState('');

  //Get all IDs for dropdown
  const fetchData = async () => {
    try {
      const fetchResponse = await fetch('http://localhost:4000/api/fetchid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const fetchedData = await fetchResponse.json();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  //Get data of specific ID
  // const fetchDetails = async () => {
  //   try {
  //     const fetchResponse = await fetch('http://localhost:4000/api/dataget', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         id: searchId,
  //       }),
  //     });
  //     const fetchedData = await fetchResponse.json();
  //     setData(fetchedData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  useEffect(()=> {
    fetchData();
  }, [])

  // useEffect(()=> {
  //   fetchDetails();
  // }, [searchId])

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
          <form>
            <select
            className="student-id"
            onChange={(e) => setSearchId(e.target.value)}
            required
            >
            <option value="null">Select Student</option>
            {
            data.map((datum) => {
              return (
                <option>{datum.id}</option>
              )
            })
            }
            </select>
          </form>
        </div>
      </div>
    </>
)};

export default Update;

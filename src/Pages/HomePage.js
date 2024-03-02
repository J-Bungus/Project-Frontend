// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const instance = axios.create({ baseURL: 'https://dreamschools-182388d60dc9.herokuapp.com'});
  const [ schoolList, setSchoolList ] = useState([]);
  const [ isExpanded, setIsExpanded ] = useState(false);

  useEffect(() => {
    instance.get('/getSchools', {count: 10}, {
          headers: {
            'Content-Type': 'application/json'
          }
    }).then(res => {
      const data = res.data;
      setSchoolList(data);
    });
  }, []);

  return (
    <div className="homepage">
      <h1 className="title">Home</h1>
      <Link to="/create" className="create-link">
        <button>Create</button>
      </Link>
      <div className="school-list" onClick={setIsExpanded(true)}>
        {schoolList.map((school, index) => (
          <div className="school-card">
            <div className="image-container">
                <img src={school.blobURL} alt={school.name} className="school-image"/>
            </div>
            <div className="school-info">
              <h2 className="school-name">{school.name}</h2>
              <p className="school-description">{isExpanded ? school.about : school.about.slice(0, 100) + '...'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import './Home.css';

// flex-column-center found in global index.css file
const Home = () => (
  <div className="home-container flex-column-center">
    <div className="home-content">
      <h1>
        Welcome to <br />
        <i className="fas fa-bowling-ball" /> BOWLeagues
      </h1>
      <button className="btn btn-info">Login</button>
      <button className="btn btn-info">Register</button>
    </div>
  </div>
);

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Add styles if needed

const LandingPage = () => (
  <div className="landing-page">
    <h1>Paradise Nursery</h1>
    <p>Your one-stop shop for houseplants!</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;

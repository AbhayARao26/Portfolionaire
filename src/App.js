// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import ProfilesPage from './components/ProfilesPage';
import ContactUsPage from './components/ContactUsPage';
import './App.css';
import UserProfile from './components/UserProfile';
import AbhayProfile from './components/AbhayProfile';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Router>
      <div>
        <header className='headerMainPage'>
          <center><h1>Portfolionaire</h1></center>
        </header>
        <div className='box'>
          <nav className='navbar'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profiles">Profiles</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className='search'>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <ul>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;<li><Link to="/myprofile">Your Portfolio</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            </ul>
          </nav>
        </div>

        <footer className='footer'>
          Triple A Co.
        </footer>

        <Routes>
          <Route
            path="/profiles"
            element={<ProfilesPage searchQuery={searchQuery} />}
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/profiles/:name" element={<UserProfile />} />
          <Route path="/myprofile" element={<AbhayProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationPage from './Registration/RegistrationPage';
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import HackathonFAQ from './FAQ/HackathonFAQ';
import OpeningCeremonyFAQ from './FAQ/OpeningCeremonyFAQ';
import WorkshopsFAQ from './FAQ/WorkshopsFAQ';
import DemoDayFAQ from './FAQ/DemoDayFAQ';
import Sponsors from './Sponsors/Sponsors';
import WorkshopsDay1 from './Workshops/WorkshopsDay1';
import WorkshopsDay2 from './Workshops/WorkshopsDay2';
import WorkshopsDay3 from './Workshops/WorkshopsDay3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq/hackathon" element={<HackathonFAQ />} />
        <Route path="/faq/opening-ceremony" element={<OpeningCeremonyFAQ />} />
        <Route path="/faq/workshops" element={<WorkshopsFAQ />} />
        <Route path="/faq/demo-day" element={<DemoDayFAQ />} />
        <Route path="/workshops/day1" element={<WorkshopsDay1 />} />
        <Route path="/workshops/day2" element={<WorkshopsDay2 />} />
        <Route path="/workshops/day3" element={<WorkshopsDay3 />} />
        <Route path="/sponsors" element={<Sponsors />} />
        {/* Add other routes for different pages */}
      </Routes>
    </Router>
  );
}

export default App;
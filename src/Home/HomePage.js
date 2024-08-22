// src/Home/HomePage.js

import React from 'react';
import CountdownTimer from './CountdownTimer';
import ProblemStatement from './ProblemStatement';
import Timeline from './Timeline';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>NUS FINTECH SUMMIT 2025</h1>
      <p>Theme: ___________</p>
      <p>Date: ___________</p>
      
      <CountdownTimer />

      <ProblemStatement />

      <Timeline />
    </div>
  );
};

export default HomePage;
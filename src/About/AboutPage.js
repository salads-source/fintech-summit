// src/About/AboutPage.js

import React from 'react';
import FintechSummit from './FintechSummit';
import FintechSociety from './FintechSociety';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>ABOUT US</h1>
      <FintechSummit />
      <FintechSociety />
    </div>
  );
};

export default AboutPage;
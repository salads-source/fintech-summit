// src/FAQ/HackathonFAQ.js

import React from 'react';
import FAQTemplate from './FAQTemplate';

const HackathonFAQ = () => {
  const questions = [
    { question: 'When is the hackathon held?', answer: '29 June 2025' },
    // Add more questions as needed
  ];

  return <FAQTemplate title="Hackathon FAQ" questions={questions} />;
};

export default HackathonFAQ;
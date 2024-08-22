// src/FAQ/DemoDayFAQ.js

import React from 'react';
import FAQTemplate from './FAQTemplate';

const DemoDayFAQ = () => {
  const questions = [
    { question: 'When is the demo day?', answer: '30 June 2025' },
    // Add more questions as needed
  ];

  return <FAQTemplate title="Demo Day FAQ" questions={questions} />;
};

export default DemoDayFAQ;
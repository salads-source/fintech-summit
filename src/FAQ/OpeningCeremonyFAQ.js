// src/FAQ/OpeningCeremonyFAQ.js

import React from 'react';
import FAQTemplate from './FAQTemplate';

const OpeningCeremonyFAQ = () => {
  const questions = [
    { question: 'When is the opening ceremony?', answer: '28 June 2025' },
    // Add more questions as needed
  ];

  return <FAQTemplate title="Opening Ceremony FAQ" questions={questions} />;
};

export default OpeningCeremonyFAQ;
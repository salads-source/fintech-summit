// src/FAQ/WorkshopsFAQ.js

import React from 'react';
import FAQTemplate from './FAQTemplate';

const WorkshopsFAQ = () => {
  const questions = [
    { question: 'What workshops are available?', answer: 'AI, Web Development, Cybersecurity' },
    { question: 'What workshops are available?', answer: 'AI, Web Development, Cybersecurity' }
    // Add more questions as needed
  ];

  return <FAQTemplate title="Workshops FAQ" questions={questions} />;
};

export default WorkshopsFAQ;
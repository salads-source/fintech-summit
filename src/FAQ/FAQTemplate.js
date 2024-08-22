// src/FAQ/FAQTemplate.js

import React from 'react';

const FAQTemplate = ({ title, questions }) => {
  return (
    <div>
      <h1>{title}</h1>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0' }}>
          <h2>{question.question}</h2>
          <p>Ans: {question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQTemplate;
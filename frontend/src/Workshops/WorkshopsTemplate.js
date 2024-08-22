// src/Workshops/WorkshopsTemplate.js

import React from 'react';

const WorkshopsTemplate = ({ title, workshops }) => {
  return (
    <div>
      <h1>{title}</h1>
      {workshops.map((workshop, index) => (
        <div key={index}>
          <img src={workshop.image} alt="Workshop" />
          <div>
            <p>Date: {workshop.date}</p>
            <p>Time: {workshop.time}</p>
          </div>
        </div>
      ))}
      <button>Register</button>
    </div>
  );
};

export default WorkshopsTemplate;
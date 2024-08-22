// src/Sponsors/Sponsors.js

import React from 'react';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Sponsor 1',
      logo: '', // Add the image URL or path for the sponsor's logo
      description: 'Sponsor 1 is a leading company in tech innovation.',
    },
    {
      name: 'Sponsor 2',
      logo: '', // Add the image URL or path for the sponsor's logo
      description: 'Sponsor 2 is a global leader in AI and machine learning.',
    },
    // Add more sponsors as needed
  ];

  return (
    <div>
      <h1>Our Sponsors</h1>
      {sponsors.map((sponsor, index) => (
        <div key={index}>
          <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
          <h2>{sponsor.name}</h2>
          <p>{sponsor.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
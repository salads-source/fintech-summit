// src/Workshops/WorkshopsDay1.js

import React from 'react';
import WorkshopsTemplate from './WorkshopsTemplate';

const WorkshopsDay1 = () => {
  const workshops = [
    {
      image: '', // Add the image URL or path
      date: '29 June 2025',
      time: '10:00 AM - 12:00 PM',
    },
    {
      image: '', // Add the image URL or path
      date: '29 June 2025',
      time: '2:00 PM - 4:00 PM',
    },
  ];

  return <WorkshopsTemplate title="Day 1 Workshops" workshops={workshops} />;
};

export default WorkshopsDay1;
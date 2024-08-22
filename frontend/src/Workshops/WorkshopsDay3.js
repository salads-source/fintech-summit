// src/Workshops/WorkshopsDay3.js

import React from 'react';
import WorkshopsTemplate from './WorkshopsTemplate';

const WorkshopsDay3 = () => {
  const workshops = [
    {
      image: '', // Add the image URL or path
      date: '1 July 2025',
      time: '10:00 AM - 12:00 PM',
    },
    {
      image: '', // Add the image URL or path
      date: '1 July 2025',
      time: '2:00 PM - 4:00 PM',
    },
  ];

  return <WorkshopsTemplate title="Day 3 Workshops" workshops={workshops} />;
};

export default WorkshopsDay3;
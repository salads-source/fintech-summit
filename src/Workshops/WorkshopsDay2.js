// src/Workshops/WorkshopsDay2.js

import React from 'react';
import WorkshopsTemplate from './WorkshopsTemplate';

const WorkshopsDay2 = () => {
  const workshops = [
    {
      image: '', // Add the image URL or path
      date: '30 June 2025',
      time: '10:00 AM - 12:00 PM',
    },
    {
      image: '', // Add the image URL or path
      date: '30 June 2025',
      time: '2:00 PM - 4:00 PM',
    },
  ];

  return <WorkshopsTemplate title="Day 2 Workshops" workshops={workshops} />;
};

export default WorkshopsDay2;
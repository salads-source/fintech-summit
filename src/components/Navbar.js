// src/components/Navbar.js

import React from 'react';
import Dropdown from './Dropdown';

const Navbar = () => {
  const workshopsItems = [
    { label: 'Day 1', href: '/workshops/day1' },
    { label: 'Day 2', href: '/workshops/day2' },
    { label: 'Day 3', href: '/workshops/day3' },
  ];

  const faqItems = [
    { label: 'Opening Ceremony', href: '/faq/opening-ceremony' },
    { label: 'Hackathon', href: '/faq/hackathon' },
    { label: 'Workshops', href: '/faq/workshops' },
    { label: 'Demo Day', href: '/faq/demo-day' },
  ];

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        
        {/* Workshops Dropdown */}
        <Dropdown title="Workshops" items={workshopsItems} />

        <li><a href="/sponsors">Sponsors</a></li>

        {/* FAQ Dropdown */}
        <Dropdown title="FAQ" items={faqItems} />

        <li><a href="/registration">Registration</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isWorkshopsOpen, setIsWorkshopsOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <nav>
      <div>
        <div>
          <Link href="/">
            HOME
          </Link>
          <Link href="/about">
            ABOUT
          </Link>

          {/* Workshops Dropdown */}
          <div>
            <button onClick={() => setIsWorkshopsOpen(!isWorkshopsOpen)}>
              WORKSHOPS
            </button>
            {isWorkshopsOpen && (
              <div>
                <Link href="/workshops/day1">
                  Day 1
                </Link>
                <Link href="/workshops/day2">
                  Day 2
                </Link>
                <Link href="/workshops/day3">
                  Day 3
                </Link>
              </div>
            )}
          </div>

          {/* FAQ Dropdown */}
          <div>
            <button onClick={() => setIsFAQOpen(!isFAQOpen)}>
              FAQ
            </button>
            {isFAQOpen && (
              <div>
                <Link href="/faq/hackathon">
                  Hackathon
                </Link>
                <Link href="/faq/workshops">
                  Workshops
                </Link>
                <Link href="/faq/opening-ceremony">
                  Opening Ceremony
                </Link>
                <Link href="/faq/demo-day">
                  Demo Day
                </Link>
              </div>
            )}
          </div>

          <Link href="/sponsors">
            SPONSORS
          </Link>
          <Link href="/registration">
            REGISTRATION
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// src/Home/CountdownTimer.js

import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("Jan 10, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer">
      <div className="time-box">
        <p>{timeLeft.days}</p>
        <span>DAYS</span>
      </div>
      <div className="time-box">
        <p>{timeLeft.hours}</p>
        <span>HOURS</span>
      </div>
      <div className="time-box">
        <p>{timeLeft.minutes}</p>
        <span>MINS</span>
      </div>
      <div className="time-box">
        <p>{timeLeft.seconds}</p>
        <span>SEC</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
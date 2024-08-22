// src/Registration/RegistrationForm.js

import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Ensure this is correctly set up

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [workshops, setWorkshops] = useState([]);
  const [questions, setQuestions] = useState('');
  const [message, setMessage] = useState('');

  const handleWorkshopChange = (e) => {
    const value = e.target.value;
    setWorkshops((prev) =>
      prev.includes(value)
        ? prev.filter((workshop) => workshop !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { data, error } = await supabase.from('registrations').insert([
      {
        name: name,
        email: email,
        workshops: workshops.join(', '), // Store as a comma-separated string
        questions: questions,
      },
    ]);

    if (error) {
      setMessage('Error registering. Please try again.');
    } else {
      setMessage('Registration successful!');
      // Reset form
      setName('');
      setEmail('');
      setWorkshops([]);
      setQuestions('');
    }
  };

  return (
    <div className="registration-form">
      <h2>DAY 1 WORKSHOP REGISTRATION</h2>
      <p>Date: 10 Jan 2025</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Which workshops will you be attending?</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="Workshop 1"
                onChange={handleWorkshopChange}
                checked={workshops.includes('Workshop 1')}
              />
              Workshop 1
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Workshop 2"
                onChange={handleWorkshopChange}
                checked={workshops.includes('Workshop 2')}
              />
              Workshop 2
            </label>
          </div>
        </div>
        <div>
          <label>Any questions?</label>
          <input
            type="text"
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
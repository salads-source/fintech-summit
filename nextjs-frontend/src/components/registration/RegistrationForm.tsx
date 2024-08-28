"use client";

import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import InputField from '@/components/registration/InputField';
import CheckboxField from '@/components/registration/CheckboxField';
import QuestionsInput from '@/components/registration/QuestionsInput';
import SubmitButton from '@/components/registration/SubmitButton';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    workshop1: false,
    workshop2: false,
    questions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const docRef = await addDoc(collection(db, 'registrations'), formData);
      alert('Registration successful!');
      setFormData({
        name: '',
        email: '',
        workshop1: false,
        workshop2: false,
        questions: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-900 p-6 rounded-lg shadow-lg">
      <InputField id="name" label="Name" type="text" name="name" value={formData.name} onChange={handleChange} required />
      <InputField id="email" label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
      
      <div className="mb-4">
        <label className="block text-white font-medium mb-1">Which workshops will you be attending?</label>
        <CheckboxField id="workshop1" label="Workshop 1" name="workshop1" checked={formData.workshop1} onChange={handleChange} />
        <CheckboxField id="workshop2" label="Workshop 2" name="workshop2" checked={formData.workshop2} onChange={handleChange} />
      </div>

      <QuestionsInput value={formData.questions} onChange={handleChange} />
      <SubmitButton />
    </form>
  );
};

export default RegistrationForm;
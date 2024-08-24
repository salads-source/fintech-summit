// src/app/registration/page.tsx
import React from 'react';

const RegistrationPage = () => {
    return (
        <div>
            <h1>DAY 1 WORKSHOP REGISTRATION</h1>
            <p>Date: 10 Jan 2025</p>

            <form>
                {/* Name Input */}
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" />
                </div>

                {/* Email Input */}
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>

                {/* Workshop Selection */}
                <div>
                    <label>Which workshops will you be attending?</label>
                    <div>
                        <input type="checkbox" name="workshop1" />
                        <label>Workshop 1</label>
                    </div>
                    <div>
                        <input type="checkbox" name="workshop2" />
                        <label>Workshop 2</label>
                    </div>
                </div>

                {/* Questions Input */}
                <div>
                    <label>Any questions?</label>
                    <input type="text" name="questions" />
                </div>

                {/* Register Button */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
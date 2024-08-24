import React from 'react';

export default function AboutPage() {
    return (
        <div>
            <div>
                <h1>ABOUT US</h1>
            </div>
            <div>
                <div>
                    <h2>FINTECH SUMMIT</h2>
                    <div>
                        {/* Placeholder for content */}
                        <p>Information about the summit goes here.</p>
                    </div>
                </div>
                <div>
                    <h2>FINTECH SOCIETY</h2>
                    <div>
                        {/* Placeholder for Fintech Society content */}
                        <img
                            src="/fintech-logo.png" // Replace with your actual image path
                            alt="Fintech Society Logo"
                        />
                    </div>
                    <button>
                        Find out more!
                    </button>
                </div>
            </div>
        </div>
    );
}

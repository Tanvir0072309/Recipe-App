import React from 'react';
import './index.css'; // Ensure index.css is imported

export function Header() {
    return (
        <header className="main-header">
            <div className="header-container">
                {/* Logo and Name Wrapper */}
                <div className="brand-wrapper">
                    {/* Simple SVG Logo */}
                    <div className="logo-box">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            className="logo-icon"
                        >
                            <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </div>

                    <h1 className="brand-name">
                        RECIPE<span className="highlight">BOT</span>
                    </h1>
                </div>
            </div>
        </header>
    );
}
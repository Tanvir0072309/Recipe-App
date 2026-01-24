import React from "react";
import "../index.css"; // kyunki index.css src me hai

export function Header() {
    return (
        <header className="ai-header">
            {/* Logo Section */}
            <div className="logo-box">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                    alt="AI Bot Logo"
                    className="logo-img"
                />
            </div>

            {/* Center Title */}
            <h1 className="app-title">AI RECIPE BOT</h1>
        </header>
    );
}

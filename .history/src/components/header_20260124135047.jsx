import React from "react";
import ".";
import BotLogo from "./bot-logo.svg"; // apna svg logo yahan import karo

const Header = () => {
    return (
        <header className="app-header">
            <div className="header-inner">

                {/* Logo */}
                <div className="logo-box">
                    <img src={BotLogo} alt="AI Bot Logo" />
                </div>

                {/* App Name Center */}
                <h1 className="app-title">
                    Recipe AI Bot
                </h1>

            </div>
        </header>
    );
};

export default Header;

import React from 'react';

const Header = () => {
    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-center items-center">
                {/* Logo and Name Container */}
                <div className="flex items-center space-x-3">
                    {/* Aapka Logo (SVG ya Image) */}
                    <div className="bg-orange-500 p-2 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="Vertical 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                    </div>

                    {/* Name */}
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                        Recipe<span className="text-orange-500">AI</span>
                    </h1>
                </div>
            </div>
        </nav>
    );
};

export default Header;
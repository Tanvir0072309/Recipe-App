import React from 'react';

// Export function ka use karte hue component
export function Header() {
    return (
        <header className="w-full bg-white border-b border-gray-200 shadow-sm py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">

                {/* Logo aur Name ka wrapper */}
                <div className="flex items-center gap-3">
                    {/* Chef Hat ya Recipe Icon */}
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                    </div>

                    {/* App Name */}
                    <span className="text-xl font-extrabold tracking-tight text-gray-900">
                        RECIPE<span className="text-orange-600">MATE</span>
                    </span>
                </div>

            </div>
        </header>
    );
}
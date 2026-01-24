import React from 'react';

export function Header() {
    return (
        <header className="w-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] py-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-center items-center px-4">

                {/* Logo and Name Wrapper */}
                <div className="flex items-center gap-3">
                    {/* Chef Icon */}
                    <div className="bg-orange-500 p-2 rounded-xl shadow-inner">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </div>

                    {/* Brand Name */}
                    <h1 className="text-2xl font-black text-gray-800 tracking-tighter uppercase">
                        Chef<span className="text-orange-500">GPT</span>
                    </h1>
                </div>

            </div>
        </header>
    );
}
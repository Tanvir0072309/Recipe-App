import { useState } from "react";
import "../index.css";

export function RecipeInput() {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (!text.trim()) return;
        console.log("User query:", text);
        setText("");
        cinst fordata = ne
    };

    const ingrediants = ["Mango", "Orange"];
    const myingrediants = ingrediants.map((ingrediant) => (
        <li key={ingrediant}>{ingrediant}</li>
    ));

    return (
        <>
        <div className="floating-input">
            <input
                type="text"
                placeholder="Ask for a recipe..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleSubmit} aria-label="Submit recipe">
                {/* SPOON + FORK CROSS SVG */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 2C5 2 4 4 4 6C4 8 6 10 6 12V22H8V12C8 10 10 8 10 6C10 4 9 2 8 2H6Z"
                        fill="white"
                    />
                    <path
                        d="M14 2C13.5 2 13 2.5 13 3V12L11 22H13L15 12V3C15 2.5 14.5 2 14 2Z"
                        fill="white"
                        transform="rotate(45 12 12)"
                    />
                </svg>
            </button>
        </div>
           
            <ul>{myingrediants}</ul>
        </>
    );
}

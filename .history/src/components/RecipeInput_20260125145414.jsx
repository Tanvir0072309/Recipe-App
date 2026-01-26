import { useState, useRef } from "react";
import "../index.css";
import React from "react";

export function RecipeInput({ onAdd }) {
    const [result, setResult] = React.useState(1);
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") return;

        onAdd(text);     // ✅ array me ja raha
        setText("");     // ✅ input clear

        inputRef.current.focus(); // ✅ cursor back
    };

    

    function handleChange() {
        setResult(prvResult => prvResult + 1);
    }

    function PassOrFail() {
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="floating-input">
                <input
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                />
                <h1>Pass</h1>
                <h1>{result}</h1>
                <button onClick={handleChange} type="submit" aria-label="submit">
                    {/* FIXED ICON */}
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path d="M2 21L23 12L2 3V10L17 12L2 14Z" />
                    </svg>
                </button>
            </div>
        </form>
    );
}

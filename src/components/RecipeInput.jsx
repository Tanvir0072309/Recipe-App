import { useState, useRef } from "react";
import "../index.css";
import React from "react";
import { RecipeCTA } from "./RecipeCTA";

export function RecipeInput({ onAdd }) {
    const [text, setText] = useState("");
    const [n, setN] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") return;

        onAdd(text);
        setText("");
        inputRef.current.focus();
    };

    return (
        <>
        {n && <RecipeCTA />}
        <form onSubmit={handleSubmit}>
            <div className="floating-input">
                <input
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                />

                <button type="submit" aria-label="submit" onClick={() => setN(n + 1)}>
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
            </>
            );
}

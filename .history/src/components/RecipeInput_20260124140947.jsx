import React, { useState } from "react";
import "../index.css"

export function RecipeInput() {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (text.trim() === "") return;
        console.log("recipe query:", text);
        setText("");
    };

    return (
        <div className="input-wrapper">
            <input
                type="text"
                placeholder="Ask for a recipe..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleSubmit} aria-label="Submit">
                📖
            </button>
        </div>
    );
}
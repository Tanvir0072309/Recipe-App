import React, { useState } from "react";
import "../index.css";

export function RecipeInput() {
    const [text, setText] = useState("");

    const submitHandler = () => {
        if (!text.trim()) return;
        console.log("User asked:", text);
        setText("");
    };

    return (
        <div className="floating-input">
            <input
                type="text"
                placeholder="Type a recipe you want..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={submitHandler} title="Get Recipe">
                📖
            </button>
        </div>
    );
}

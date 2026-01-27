import { useState, useRef } from "react";
import "../index.css";
import React from "react";

export function RecipeInput({ onAdd }) {
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") return;

        onAdd(text);     // ✅ array me ja raha
        setText("");     // ✅ input clear

        inputRef.current.focus(); // ✅ cursor back
    };

    const [addFavoriteThing, setaddFavoriteThing] = useState([]);
    const FaviourateArray = ["🙌😭", "😘💕", "😍❤️", "🤦‍♀️😂", "🤦‍♂️🤣", "😋🥲", "😙🥰", "😘😗"]
    function testFunction() {

        setaddFavoriteThing(prevfavThings => [...prevfavThings,...addFavoriteThing]);
    }

    

    return (
        <form onSubmit={handleSubmit} >
            <div className="floating-input">
                <input onClick={testFunction}
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                />
                <h1>{addFavoriteThing}</h1>
                <button type="submit" aria-label="submit" onClick={testFunction}>
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

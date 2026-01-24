import { useState, useRef } from "react";
import "../index.css";

export function RecipeInput({ onAdd }) {
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // 🔥 form reload stop
        console.log("SUBMIT FIRED");

        if (text.trim() === "") return;

        onAdd(text);        // 🔥 array me bhejo
        setText("");        // 🔥 input clear

        // 🔥 cursor wapas input me
        setTimeout(() => {
            inputRef.current.focus();
        }, 0);
    };

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

                <button type="submit">
                    SEND
                </button>
            </div>
        </form>
    );
}

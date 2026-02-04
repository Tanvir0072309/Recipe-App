import { useState, useRef } from "react";
import "../index.css";
import React from "react";

export function RecipeInput({ onAdd }) {
    const [text, setText] = useState("");
    const [permi,setpermi] = useState(false)
    const inputRef = useRef(null);
    const [faltu, setfaltu] = useState([])
    


    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") return;

        onAdd(text);     // ✅ array me ja raha
        setText("");     // ✅ input clear

        inputRef.current.focus(); // ✅ cursor back
    };
    
    const things = ["Tests","teat2","test3","test4"]
    function testFunction() {
        setpermi(prev => !prev)
        setfaltu(prev => [...prev, things[prev.length]])
    }
    

    return (
        <form onSubmit={handleSubmit} >
            <div className="floating-input">
                <input 
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                />
                <h1>{faltu}</h1>
                {permi === true && <h1> "Hello" </h1>}
                <button type="submit" aria-label="submit" onclick ={setpermi => !setpermi} onClick={testFunction}>
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

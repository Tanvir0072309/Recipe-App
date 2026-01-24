import { useState } from "react";
import "../index.css";

export function RecipeInput() {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data.get("ingredient"));
    };

    const ingrediants = ["Mango", "Orange"];

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="floating-input">
                    <input
                        type="text"
                        placeholder="Ask for a recipe..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        name="ingredient"
                    />

                    <button type="submit" aria-label="Submit recipe">
                        {/* SVG */}
                    </button>
                </div>
            </form>

            <ul>
                {ingrediants.map((ingrediant) => (
                    <li key={ingrediant}>{ingrediant}</li>
                ))}
            </ul>
        </>
    );
}

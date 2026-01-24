import { useState } from "react";
import "../index.css";

export function RecipeInput() {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", text);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="floating-input">
                <input
                    type="text"
                    name="ingredient"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ask for a recipe..."
                />
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

import { useState } from "react";
import { RecipeInput } from "./RecipeInput";

export default function Main() {
    const [items, setItems] = useState([]);

    const addItem = (value) => {
        setItems((prev) => [...prev, value]);
    };

    return (
        <>
            {/* Page content */}
            <div className="content">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Floating input */}
            <RecipeInput onAdd={addItem} />
        </>
    );
}

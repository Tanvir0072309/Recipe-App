import { useState } from "react";
import { RecipeInput } from "./RecipeInput";

export default function Main() {
    const [items, setItems] = useState([]);
    const

    const addItem = (value) => {
        setItems((prev) => [...prev, value]);
    };

    return (
        <>
            <div style={{ paddingBottom: "120px" }}>
                <ul>
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <RecipeInput onAdd={addItem} />
        </>
    );
}

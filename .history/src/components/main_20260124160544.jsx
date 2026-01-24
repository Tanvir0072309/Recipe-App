import { useState } from "react";
import { RecipeInput } from "./RecipeInput";

exporttion Main() {
    const [items, setItems] = useState([]);

    const addItem = (value) => {
        console.log("ADDING:", value);
        setItems((prev) => [...prev, value]);
    };

    return (
        <>
            <RecipeInput onAdd={addItem} />

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

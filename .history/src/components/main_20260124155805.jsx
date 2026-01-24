import { useState } from "react";
import { RecipeInput } from "./components/RecipeInput";

export default function Main() {
    const [items, setItems] = useState([]);

    const addItem = (value) => {
        console.log("ADDING TO ARRAY:", value); // debug
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

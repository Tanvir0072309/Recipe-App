import { useState } from "react";
import { RecipeInput } from "./RecipeInput";
import React from "react";
import { RecipeCTA } from "./RecipeCTA";


export default function Main() {
    const [items, setItems] = useState([]);

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
            <RecipeCTA />
            <RecipeInput onAdd={addItem} />
        </>
    );
}

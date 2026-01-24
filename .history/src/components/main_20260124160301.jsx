import { useState } from "react";
import { RecipeInput } from "./RecipeInput";

export function Main() {
    const [items, setItems] = useState([]);

    const addItem = (value) => {
        console.log("ADDING TO ARRAY:", value); // debug
        setItems((prev) => [...prev, value]);
    };

    return (
        <>
            <RecipeInput onAdd={addItem} />

            <ul>import {useState} from "react";
                import {RecipeInput} from "./RecipeInput";

                export default function Main() {
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

                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

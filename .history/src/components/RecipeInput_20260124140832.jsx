import React, { useState } from "react";
import "../index.css"

export function RecipeInput() {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (text.trim() === "") return;
        console.log("recipe query:")
    }
}
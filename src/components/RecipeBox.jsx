import { useState } from "react";
import { getRecipe } from "../ai/aiService";

export default function RecipeBox() {
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleClick() {
        setLoading(true);
        const data = await getRecipe("egg, onion, tomato");
        setRecipe(data[0]?.generated_text || "No recipe found");
        setLoading(false);
    }

    return (
        <div style={{ padding: 20 }}>
            <button onClick={handleClick}>
                {loading ? "Cooking..." : "Get Recipe"}
            </button>

            <pre style={{ marginTop: 20 }}>{recipe}</pre>
        </div>
    );
}

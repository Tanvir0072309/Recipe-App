import { useState, useEffect } from "react";
import { RecipeInput } from "./RecipeInput";
import { RecipeCTA } from "./RecipeCTA";
import { getRecipeFromAI } from "../ai/aiService";

export default function Main() {
    const [items, setItems] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(false);

    // 🔥 KEYBOARD AWARE FLOATING INPUT
   useEffect(() => {
  const updateKeyboardOffset = () => {
    if (!window.visualViewport) return;

    const viewport = window.visualViewport;
    const keyboardHeight =
      window.innerHeight - viewport.height - viewport.offsetTop;

    // 👇 browser already thoda margin deta hai, isliye clamp
    const adjusted =
      keyboardHeight > 0 ? Math.max(0, keyboardHeight - 40) : 0;

    document.documentElement.style.setProperty(
      "--keyboard-offset",
      `${adjusted}px`
    );
  };

  window.visualViewport.addEventListener("resize", updateKeyboardOffset);
  window.visualViewport.addEventListener("scroll", updateKeyboardOffset);

  return () => {
    window.visualViewport.removeEventListener("resize", updateKeyboardOffset);
    window.visualViewport.removeEventListener("scroll", updateKeyboardOffset);
  };
}, []);

    const addItem = (value) => {
        setItems((prev) => [...prev, value]);
    };

    const handleGetRecipe = async () => {
        if (items.length === 0) return;

        setLoading(true);
        setRecipe("");

        try {
            const data = await getRecipeFromAI(items);

            if (data && data.text) {
                setRecipe(data.text.replace(/\*\*/g, ""));
            } else {
                setRecipe("❌ No recipe received from AI");
            }
        } catch (err) {
            setRecipe("❌ Failed to get recipe");
        }

        setLoading(false);
    };

    const handleCancelRecipe = () => {
        setItems([]);
        setRecipe("");
        setLoading(false);
    };

    const handleImportRecipe = async () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        await new Promise(r => setTimeout(r, 400));
        window.print();
    };

    return (
        <>
            <div className="ingredients-box">
                <h3>List of Ingredients ({items.length})</h3>
                <ul className="ingredients-list">
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            {items.length >= 4 && (
                <RecipeCTA
                    onGetRecipe={handleGetRecipe}
                    onCancelRecipe={handleCancelRecipe}
                    onImportRecipe={handleImportRecipe}
                    loading={loading}
                    hasRecipe={!!recipe}
                />
            )}

            {recipe && (
                <div className="recipe-output">
                    <h3>Your Recipe 🍲</h3>
                    <pre className="recipe-text">{recipe}</pre>
                </div>
            )}

            <RecipeInput onAdd={addItem} />
        </>
    );
}

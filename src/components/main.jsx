import { useState } from "react";
import { RecipeInput } from "./RecipeInput";
import { RecipeCTA } from "./RecipeCTA";
import { getRecipeFromAI } from "../ai/aiService";
import ReactMarkdown from "react-markdown";
import html2canvas from "html2canvas";



export default function Main() {
    const [items, setItems] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(false);

    // add ingredient from input
    const addItem = (value) => {
        setItems((prev) => [...prev, value]);
    };

    // call backend → AI
    const handleGetRecipe = async () => {
        console.log("GET RECIPE CLICKED");
        console.log("INGREDIENTS ARRAY:", items);

        if (items.length === 0) return;

        setLoading(true);
        setRecipe("");

        try {
            const data = await getRecipeFromAI(items);
            console.log("API RESPONSE:", data);

            if (data && data.text) {
                setRecipe(data.text.replace(/\*\*/g, ""));
;
            } else {
                setRecipe("❌ No recipe received from AI");
            }
        } catch (err) {
            console.error("FRONTEND ERROR:", err);
            setRecipe("❌ Failed to get recipe");
        }

        setLoading(false);
    };



    const handleScrollAndScreenshot = async () => {
        try {
            // UX ke liye scroll (optional)
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });

            await new Promise((r) => setTimeout(r, 600));

            // 🎯 ONLY MAIN CONTENT
            const element = document.getElementById("main-content");

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
            });

            const image = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = image;
            link.download = "recipe.png";
            link.click();
        } catch (err) {
            console.error("Screenshot error:", err);
        }
    };



    return (
        <div
            id="main-content"   // 👈 ADD THIS
            style={{
                padding: "20px",
                maxWidth: "600px",
                margin: "0px auto 100px",
                paddingBottom: "160px",
            }}
        >


            <h2>AI Recipe Generator 🍳</h2>

            {/* Ingredient list */}
            {items.length > 0 && (
                <>
                    <h3>List of Ingredients ({items.length})</h3>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            )}

            {/* Get Recipe button */}
            {items.length >= 2 && (
                <RecipeCTA
                    onGetRecipe={handleGetRecipe}
                    onCancelRecipe={() => setRecipe("")}
                    onImportRecipe={handleScrollAndScreenshot}
                    loading={loading}
                    hasRecipe={!!recipe}
                />



            )}

            {/* Recipe output */}
            {recipe && (
                <div style={{ marginTop: "30px" }}>
                    <h3>Your Recipe 🍲</h3>
                    <ReactMarkdown>
                        {recipe}
                    </ReactMarkdown>

                </div>
            )}

            {/* Input box */}
            <RecipeInput onAdd={addItem} />
        </div>
    );
}

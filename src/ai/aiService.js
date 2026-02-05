export async function getRecipeFromAI(items) {
    const res = await fetch("http://localhost:5000/api/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ingredients: items.join(", "),
        }),
    });

    return res.json();
}

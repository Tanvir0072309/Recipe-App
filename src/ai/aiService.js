const API_URL = import.meta.env.VITE_API_URL;

export async function getRecipeFromAI(items) {
  const res = await fetch(`${API_URL}/api/recipe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ingredients: items.join(", "),
    }),
  });

  return res.json();
}

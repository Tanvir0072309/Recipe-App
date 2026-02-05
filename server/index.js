import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/recipe", async (req, res) => {
    const { ingredients } = req.body;
    console.log("BACKEND RECEIVED:", ingredients);

    try {
        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        {
                            role: "system",
                            content: "You are a helpful cooking assistant.",
                        },
                        {
                            role: "user",
                            content: `Give a simple step-by-step cooking recipe using these ingredients: ${ingredients}`,
                        },
                    ],
                    temperature: 0.7,
                    max_tokens: 400,
                }),
            }
        );

        const data = await response.json();
        console.log("GROQ RAW:", data);

        if (data.error) {
            return res.status(500).json({
                error: data.error.message,
            });
        }

        const text =
            data?.choices?.[0]?.message?.content || "No recipe generated";

        res.json({ text });
    } catch (err) {
        console.error("GROQ ERROR:", err);
        res.status(500).json({ error: "Groq failed" });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Backend running on port ${PORT}`);
});


# 🍳 AI Recipe Generator

AI Recipe Generator is a modern full-stack web application that creates step-by-step cooking recipes using artificial intelligence.  
Users simply enter ingredients, and the app instantly generates a complete recipe with a clean and user-friendly interface.

This project focuses on real-world frontend + backend integration, clean UI/UX, and practical AI usage.

---

## 🚀 Features

- 📝 Add ingredients dynamically
- 🤖 Generate AI-powered recipes
- ⏳ Loading state while recipe is being prepared
- ❌ Cancel last generated recipe
- 📸 One-click recipe screenshot export (gallery/download)
- 🎨 Modern, responsive UI
- 🔐 Secure API handling via backend

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- CSS (modern styling)
- html2canvas (for screenshots)

### Backend
- Node.js
- Express.js
- Groq AI API (LLM)
- REST API architecture

---

## 📂 Project Structure

src/
├── ai/
│ └── aiService.js
├── components/
│ ├── Main.jsx
│ ├── RecipeInput.jsx
│ └── RecipeCTA.jsx
└── main.jsx

server/
├── index.js
├── package.json
└── .env
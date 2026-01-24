import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { RecipeInput } from "./components/RecipeInput";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Header
            height200px
        />
        <RecipeInput />
    </React.StrictMode>
);

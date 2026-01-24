import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "src/components/Header.jsx"; // 👈 named import
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>
);

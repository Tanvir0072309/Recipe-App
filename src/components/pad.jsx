import "index.css";
import React from "react";
import { padsData } from "./data.jsx";

export function Pad() {
    return (
        <div className="pad-container">
            {padsData.map((pad) => (
                <div
                    key={pad.id}
                    className={`pad ${pad.on ? "on" : "off"}`}
                    style={{ backgroundColor: pad.color }}
                >
                    Pad {pad.id}
                </div>
            ))}
        </div>

    )
}
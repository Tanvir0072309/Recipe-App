import React from "react";

export function Datafatched({ data }) {
    if (!data || data.length === 0) {
        return <p>Data nahi aaya 😅</p>;
    }

    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

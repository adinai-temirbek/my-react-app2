import React from "react";

export default function Card({ children }) {
    return (
        <div style={{ border: "1px solid #888", padding: 12, borderRadius: 8, margin: 8 }}>
            {children}
        </div>
    );
}

import React from "react";

export default function Menu({ links = ["Home", "Courses", "About", "Contact"] }) {
    return (
        <nav>
            <ul style={{ display: "flex", gap: 12, listStyle: "none", padding: 0 }}>
                {links.map((link, idx) => (
                    <li key={idx}><a href="#">{link}</a></li>
                ))}
            </ul>
        </nav>
    );
}

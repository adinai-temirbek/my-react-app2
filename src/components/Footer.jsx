import React from "react";

export default function Footer() {
    return (
        <footer style={{ padding: 8, borderTop: "1px solid #ddd", marginTop: 12 }}>
            <small>© {new Date().getFullYear()} Engineering College</small>
        </footer>
    );
}

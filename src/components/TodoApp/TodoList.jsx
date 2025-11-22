import React from "react";

export default function TodoList({ todos }) {
    if (todos.length === 0) return <p>No todos yet.</p>;
    return (
        <ul>
            {todos.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
    );
}

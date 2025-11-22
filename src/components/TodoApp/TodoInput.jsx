import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
    const [value, setValue] = useState("");
    const handleAdd = () => {
        const trimmed = value.trim();
        if (!trimmed) return;
        onAdd(trimmed);
        setValue("");
    };
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} placeholder="New todo..." />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

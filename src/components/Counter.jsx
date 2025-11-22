import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>+1</button>
            <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</button>
        </div>
    );
}

import React, { useState } from "react";

export default function CourseDetails() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h3>React Basics</h3>
            <button onClick={() => setShow(s => !s)}>
                {show ? "Hide details" : "Show details"}
            </button>
            {show && <p>Extra info: This course covers components, props, state, and events.</p>}
        </div>
    );
}

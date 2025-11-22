import React, { useState } from "react";
import StudentCard from "./StudentCard";

export default function StudentFilter({ students }) {
    const [filter, setFilter] = useState("all");
    const groups = ["all", ...Array.from(new Set(students.map(s => s.group)))];

    const filtered = filter === "all" ? students : students.filter(s => s.group === filter);

    return (
        <div>
            <div style={{ marginBottom: 8 }}>
                {groups.map(g => (
                    <button key={g} onClick={() => setFilter(g)} style={{ marginRight: 6 }}>
                        {g === "all" ? "All" : g}
                    </button>
                ))}
            </div>
            {filtered.map(s => (
                <StudentCard key={s.id} name={s.name} group={s.group} track={s.track} />
            ))}
        </div>
    );
}

import React from "react";
import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
    return (
        <div>
            {students.map(student => (
                <StudentCard
                    key={student.id}
                    name={student.name}
                    group={student.group}
                    track={student.track || "N/A"}
                />
            ))}
        </div>
    );
}

import React from "react";

import Hello from "./components/Hello";
import CourseInfo from "./components/CourseInfo";
import StudentCard from "./components/StudentCard";
import PrimaryButton from "./components/PrimaryButton";
import Card from "./components/Card";
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import StudentList from "./components/StudentList";
import Counter from "./components/Counter";
import CourseDetails from "./components/CourseDetails";
import LivePreview from "./components/LivePreview";
import TodoApp from "./components/TodoApp/TodoApp";
import StudentFilter from "./components/StudentFilter";

function App() {
    const students = [
        { id: 1, name: "Aida", group: "SE-101", track: "Front-end" },
        { id: 2, name: "Nurlan", group: "SE-102", track: "Back-end" },
        { id: 3, name: "Dastan", group: "SE-103", track: "DevOps" },
    ];

    const links = ["Home", "Courses", "About", "Contact"];

    return (
        <Layout>
            {/* Navigation Menu */}
            <Menu links={links} />

            {/* 1. Hello Component */}
            <section>
                <div className="card">
                    <h2>1. Hello Component</h2>
                    <Hello />
                </div>
            </section>

            {/* 2. CourseInfo Component */}
            <section>
                <div className="card">
                    <h2>2. Course Info Component</h2>
                    <CourseInfo />
                </div>
            </section>

            {/* 3. Student Cards */}
            <section>
                <div className="card">
                    <h2>3. Student Cards</h2>
                    <StudentCard name="Aida" group="SE-101" track="Front-end" />
                    <StudentCard name="Nurlan" group="SE-102" track="Back-end" />
                    <StudentCard name="Dastan" group="SE-103" track="DevOps" />
                </div>
            </section>

            {/* 4. Buttons */}
            <section>
                <div className="card">
                    <h2>4. Buttons</h2>
                    <PrimaryButton label="Login" type="primary" />
                    <PrimaryButton label="Register" type="secondary" />
                    <PrimaryButton label="Submit" type="primary" />
                </div>
            </section>

            {/* 5. Cards */}
            <section>
                <div className="card">
                    <h2>5. Cards</h2>
                    <Card>
                        <h3>Important Notice</h3>
                        <p>Classes are online this Friday.</p>
                    </Card>
                    <Card>
                        <StudentCard name="Aida" group="SE-101" track="Front-end" />
                    </Card>
                </div>
            </section>

            {/* 6. Student List */}
            <section>
                <div className="card">
                    <h2>6. Student List</h2>
                    <StudentList students={students} />
                </div>
            </section>

            {/* 7. Widgets: Counter, CourseDetails, LivePreview */}
            <section>
                <div className="card">
                    <h2>7. Widgets</h2>
                    <Counter />
                    <CourseDetails />
                    <LivePreview />
                </div>
            </section>

            {/* 8. Todo App */}
            <section>
                <div className="card">
                    <h2>8. Todo App</h2>
                    <TodoApp />
                </div>
            </section>

            {/* 9. Student Filter */}
            <section>
                <div className="card">
                    <h2>9. Student Filter</h2>
                    <StudentFilter students={students} />
                </div>
            </section>
        </Layout>
    );
}

export default App;

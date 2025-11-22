<<<<<<< HEAD
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
            <Menu links={links} />

            <section>
                <Hello />
            </section>

            <section>
                <CourseInfo />
            </section>

            <section>
                <h2>Student Cards</h2>
                <StudentCard name="Aida" group="SE-101" track="Front-end" />
                <StudentCard name="Nurlan" group="SE-102" track="Back-end" />
                <StudentCard name="Dastan" group="SE-103" track="DevOps" />
            </section>

            <section>
                <h2>Buttons</h2>
                <PrimaryButton label="Login" type="primary" />
                <PrimaryButton label="Register" type="secondary" />
                <PrimaryButton label="Submit" type="primary" />
            </section>

            <section>
                <h2>Cards</h2>
                <Card>
                    <h3>Important Notice</h3>
                    <p>Classes are online this Friday.</p>
                </Card>

                <Card>
                    <StudentCard name="Aida" group="SE-101" track="Front-end" />
                </Card>
            </section>

            <section>
                <h2>Student List</h2>
                <StudentList students={students} />
            </section>

            <section>
                <h2>Widgets</h2>
                <Counter />
                <CourseDetails />
                <LivePreview />
            </section>

            <section>
                <h2>Todo App</h2>
                <TodoApp />
            </section>

            <section>
                <h2>Student Filter</h2>
                <StudentFilter students={students} />
            </section>
        </Layout>
    );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 6f0579372b85e7d6af9de3e0ab0c332903ba8544

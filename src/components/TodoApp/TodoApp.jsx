import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => setTodos(prev => [...prev, text]);
    const clearAll = () => setTodos([]);

    return (
        <div>
            <h3>Todo App</h3>
            <TodoInput onAdd={addTodo} />
            <button onClick={clearAll} style={{ marginTop: 8 }}>Clear all</button>
            <TodoList todos={todos} />
        </div>
    );
}

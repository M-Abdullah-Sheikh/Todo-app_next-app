import Todo from "./todo";
import React from 'react';
const getTodos = async () => {
    let todos = await fetch("http://localhost:3001/api/todo/list");
    return todos.json();
}
export default async function Todolist() {
    const { todos } = await getTodos();

    return (
        <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((t) => {
                    return (
                        <li key={t.id} style={{ padding: "5px 0px" }}>
                        <Todo todo={t}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

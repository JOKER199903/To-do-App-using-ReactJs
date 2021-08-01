import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function Todo({ text, todo, todos, setTodos }) {
    function deleteHandler() {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    function completeHandler() {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };
    return (
        <div className="todo">
            <ul className={`todo_item ${todo.completed ? "completed" : ""}`}>{text}</ul>
            <div className="todo_buttons">
                <button onClick={completeHandler} className="done-btn"><FaCheck /></button>
                <button onClick={deleteHandler} className="delete-btn">< FaRegTrashAlt /></button>
            </div>
        </div>
    );
}
export default Todo;
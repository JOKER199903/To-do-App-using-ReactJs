import React from 'react';
import ToDo from "./Todo";


function ToDoList({todos, setTodos, filteredTodos}){
   
    return(
        <div className ="todo-list-container">
            <ul className = "todo-list">
                {filteredTodos.map((todo)=>(
                <ToDo
                 setTodos={setTodos}
                 todos={todos}
                 key = {todo.id}
                 todo={todo} 
                 text={todo.text}/>))}
            </ul>
        </div>
    );
}

export default ToDoList;
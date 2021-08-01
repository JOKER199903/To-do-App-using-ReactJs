import React from 'react';
import {MdAdd } from "react-icons/md";

function AddForm({setInputText, todos ,setTodos , inputText, setStatus}) {
    const inputTextHandler =(e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submiTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText,completed: false, id: Math.random()*1000}
        ])
        setInputText(" ");
    }
    function statusHandler(e){
        console.log(e.target.value)   
        setStatus(e.target.value);

    }
    
    return (
        <form className="todo_form">
            <div className="add_todo_container">
                <div className="form_container">
                    <input value={inputText} 
                    onChange ={inputTextHandler} type="text" className="todo_input" placeholder=" " required/>
                    <label className="todo_label">Add Agenda</label>
                </div>
                <button onClick ={submiTodoHandler} className="add_button" type="submit">
                    <MdAdd/>
                </button>
            </div>
            <div className="dropdown">
                <select onChange ={statusHandler} name="todo" className="filter-todos">
                    <option value="all" className="select-item">All</option>
                    <option value="completed" className="select-item">Completed</option>
                    <option value="uncompleted" className="select-item">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}


export default AddForm;
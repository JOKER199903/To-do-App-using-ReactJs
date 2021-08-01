import React,{useState, useEffect} from "react";
import logo from "./images/logo.png"
import bg from "./images/bg.png"
import AddForm from "./components/AddForm";
import ToDoList from "./components/ToDoList";
import './App.css';

function App() {
 

  const [inputText, setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {getLocalTodos();},[]);
  useEffect(() => {filterHandler();
    saveLocalTodos();},[todos,status]
  );
  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
      setFilteredTodos(todos);
      break;
    }
  };

  const saveLocalTodos =() =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  
  };

  function getLocalTodos(){
    if(localStorage.getItem("todos") == null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos",JSON.stringify("todos")));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <div className="navbar">
          <div className="navbar_brand">
            <img src={logo} alt="logo" className="brand_logo" />
          </div>
          <div className="nav_text"> SAHIL'S TO DO LIST</div>
        </div>
      </header>
      <main className="content_holder">
        <section className="hero">
          <div className="hero_bg_Image_container">
            <img src={bg}
              alt="BG hero image" className="hero_bg_image" />
          </div>
          <div className="hero_bg_overlay"></div>
          <div className="hero_card">
            <h2 className="hero_title">Add Your Today's Agenda</h2>
            <AddForm inputText={inputText}
            todos ={todos} 
            setTodos={setTodos} 
            setInputText ={setInputText} 
            setStatus={setStatus}
            filteredTodos={filteredTodos}/>
            
            <ToDoList setTodos ={setTodos} 
            todos ={todos}
            filteredTodos={filteredTodos}
            />
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;

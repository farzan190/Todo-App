import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import TodoForm from './components/TodoForm';

const data = [
  { id: 1, content: "Complete online JavsScript course", completed: true },
  { id: 2, content: "Jog around the park 3x", completed: false },
  { id: 3, content: "10 minutes meditation", completed: false },
  { id: 4, content: "Read for 1 hour", completed: false },
  { id: 5, content: "Pick up groceries", completed: false },
  { id: 6, content: "Complete Todo App on Frontend Mentor", completed: false },
];

useEffect(()=>{

const handleFilter=()=>{
  switch(filterStatus){
    case "active":
      return setFilteredTodos(todos.filter((todo)=>!todo.completed));
    case "completed":
      return setFilteredTodos(todos.filter((todo)=>todo.completed));

    default:
      setFilteredTodos(todos);  

  }

};
handleFilter();

}
  
  ,[todos,filterStatus]);




function App() {

  const[todos,setTodos]=useState(data);
  const [filterStatus,setFilterStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState(todos);

  


  
   return (
         <div>  <div> <TodoForm todos={todos} setTodos={setTodos}/></div>
           <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
          </div>
          
          
          ) 
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import TodoForm from './components/TodoForm';

const data = [
  { id: 1, content: "Complete online JavsScript course", completed: true },
  { id: 2, content: "Jog around the park 3x", completed: false },
  { id: 3, content: "10 minutes meditation", completed: false },
  { id: 4, content: "Read for 1 hour", completed: false },
  { id: 5, content: "Pick up groceries", completed: false },
  { id: 6, content: "Complete Todo App on Frontend Mentor", completed: false },
];





function App() {

  const[todos,setTodos]=useState(data);



  
   return (
           <div> <TodoForm todos={todos} setTodos={setTodos}/></div>) 
}

export default App;

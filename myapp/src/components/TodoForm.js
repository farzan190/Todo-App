import { useState } from "react";

const generateId = (array) => {
    const ids = array.map((item) => item.id);
    return Math.max(...ids) + 1;
  };


const TodoForm=({todos,setTodos})=>{
 const [todoInput,setTodoInput]=useState("");
 const handleChange=(e)=>{
  setTodoInput(e.target.value);
 }

const handleSubmit=(e)=>{
 if(todoInput){
    const newTodo={

        id: generateId(todos), 
        content:todoInput.trim(),
        completed:false,
    }
    setTodos([newTodo,...todos]);
    setTodoInput("");
 }



}

return (<div>
<form onSubmit={handleSubmit}>
<label>Add new todo</label>
<input
type="text"
name="todo-input"
className="todo-input"
id="todo-input"
placeholder="create a new todo..."
value={todoInput}
onChange={handleChange}/>
<button id="submit" type="submit">Add</button>


</form>
</div>
)

}

export default TodoForm;
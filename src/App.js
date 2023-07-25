import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/ToDoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      key: uuidv4(), // Use a different approach to generate unique keys
      task: text,
      isComp: false
    };
    setTodos([...todos, newTodo]);
  };

  const checkTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.key === id) {
          return {
            ...todo,
            isComp: !todo.isComp
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== id));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} delTodo={delTodo} />
    </div>
  );
}

export default App;
import { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.checked = !todo.checked;
    setTodos(newTodos);
  }

  function addTodo() {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, checked: false }];
    });
    todoNameRef.current.value = null;
  }

  function clearTodos() {
    const newTodos = todos.filter((todo) => !todo.checked);
    setTodos(newTodos);
  }

  function removeTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function editTodo(id, e) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.name = e.target.value;
    setTodos(newTodos);
  }

  return (
    <div>
      <div className="w-fit mx-auto mt-48">
        <div className="flex gap-2">
          <input
            ref={todoNameRef}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button onClick={addTodo} className="btn btn-success">
            Add
          </button>
          <button onClick={clearTodos} className="btn btn-error">
            Clear
          </button>
        </div>
      </div>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      ></TodoList>
    </div>
  );
}

export default App;

import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo 1", complete: false },
    { id: 2, name: "Todo 2", complete: false },
  ]);

  return (
    <div className="w-fit m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-success">Add</button>
      </div>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;

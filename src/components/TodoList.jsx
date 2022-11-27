import Todo from "./Todo";

function TodoList({ todos, toggleTodo, removeTodo, editTodo }) {
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      ></Todo>
    );
  });
}

export default TodoList;

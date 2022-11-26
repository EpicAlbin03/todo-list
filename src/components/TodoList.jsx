import Todo from "./Todo";

function TodoList({ todos }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo}></Todo>;
  });
}

export default TodoList;

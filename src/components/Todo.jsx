import { useRef } from "react";

function Todo({ todo, toggleTodo, removeTodo, editTodo }) {
  const todoInpRef = useRef();
  const todoSpanRef = useRef();

  function onChange() {
    toggleTodo(todo.id);
  }

  function onRemove() {
    removeTodo(todo.id);
  }

  function onNameEdit(e) {
    editTodo(todo.id, e);
  }

  function onEdit() {
    todoSpanRef.current.classList.toggle("hidden");
    todoInpRef.current.classList.toggle("hidden");
    todoInpRef.current.disabled = !todoInpRef.current.disabled;
    todoInpRef.current.focus();
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-2 mx-auto">
      <div className="card-body flex-row items-center">
        <div className="form-control">
          <label className="cursor-pointer label justify-start">
            <input
              type="checkbox"
              defaultChecked={todo.checked}
              onChange={onChange}
              className="checkbox checkbox-success"
            />
            <span ref={todoSpanRef} className="label-text pl-4">
              {todo.name}
            </span>
            <input
              disabled
              ref={todoInpRef}
              defaultValue={todo.name}
              onChange={onNameEdit}
              onBlur={onEdit}
              type="text"
              className="input input-sm w-full max-w-xs ml-2 hidden !bg-transparent !border-transparent"
            />
          </label>
        </div>
        <div className="card-actions ml-auto">
          <button
            onClick={onEdit}
            className="btn btn-square btn-sm btn-warning"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={onRemove}
            className="btn btn-square btn-sm btn-error"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;

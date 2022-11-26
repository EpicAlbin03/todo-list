function Todo({ todo }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-2">
      <div className="card-body flex-row items-center">
        <div className="form-control">
          <label className="cursor-pointer label justify-start">
            <input type="checkbox" className="checkbox checkbox-success" />
            <span className="label-text pl-4">{todo.name}</span>
          </label>
        </div>
        <div className="card-actions ml-auto">
          <button className="btn btn-square btn-sm btn-warning">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="btn btn-square btn-sm btn-error">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;

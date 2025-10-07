import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { resetForm, update } from "../redux/actions/formActions";
import { updateTodo, deleteTodo, AddTodo } from "../redux/actions/dataActions";

function InputForm() {
  let initialForm = useSelector((state) => state.form);
  let dispatch = useDispatch();
  let initialState = useSelector((state) => state.todo);
  function handleSubmit(e) {
    e.preventDefault();
    let form = { ...initialForm, completed: false };
    dispatch(AddTodo(form));
    dispatch(resetForm());
  }
  return (
    <>
      <div>
        <h2>Add ToDo</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={{padding:"10px" , height:"7px" ,border:"none"}}
            type="text"
            placeholder="Enter Todo"
            name="title"
            value={initialForm.title}
            onChange={(e) => dispatch(update(e.target.name, e.target.value))}
          />
          <button  style={{ margin: "10px" }} type="submit">Submit</button>
        </form>
      </div>
      {initialState.todos.length > 0 && <h3>All Todos</h3>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" , gap:"10px"}}>
        {initialState.todos.length > 0 &&
          initialState.todos.map((todo, idx) => (
            <div style={{backgroundColor:"gray" , padding:"10px"}} key={idx}>
              <p>Title : {todo.title}</p>
              {todo.completed ? (
                <p style={{ color: "green" }}>Completed</p>
              ) : (
                <p style={{ color: "red" }}>Not Completed</p>
              )}
              <button
                style={{ margin: "10px" }}
                onClick={() => dispatch(updateTodo(idx))}
              >
                update
              </button>
              <button onClick={() => dispatch(deleteTodo(idx))}>delete</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default InputForm;

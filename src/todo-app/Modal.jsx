import React, { useEffect } from "react";
import { useState } from "react";
import { actionTypes } from "./Todos.jsx";
function Modal({ showModal, editTodo, dispatch }) {
  let [todo, setTodo] = useState("");
  useEffect(() => {
    editTodo ? setTodo(editTodo.todo) : setTodo("");
  }, [editTodo]);
  if (showModal) {
    return (
      <div
        style={{
          position: "absolute",
          inset: "0 0 0 0",
          backgroundColor: "gray",
          opacity: "0.85",
          display: "grid",
          placeContent: "center",
        }}
      >
        <div style={{ width: "inherit", height: "inherit" }}>
          <h2>Edit Todo</h2>
          <input
            type="text"
            name=""
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            value="Update"
            onClick={() => {
              dispatch({
                type: actionTypes.UPDATE,
                payload: { todo, id: editTodo.id },
              });
              setTodo("");
            }}
          >
            update
          </button>
          <button
            value="Close"
            onClick={() => dispatch({ type: actionTypes.TOGGLE_MODAL })}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;

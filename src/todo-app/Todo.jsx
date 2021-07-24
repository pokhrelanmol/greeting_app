import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { actionTypes } from "./Todos.jsx";
const Todo = (props) => {
  let { id, todo, completed, dispatch } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
        key={id}
      >
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          value={todo}
          onChange={() => {
            dispatch({ type: actionTypes.TOGGLE, payload: id })
          }}
        />

        <li
          style={{
            textDecorationLine: `${completed ? "line-through" : ""}`,

          }}
        >
          {todo}
        </li>
        <DeleteIcon
          onClick={() => dispatch({ type: actionTypes.DELETE, payload: id })}
          style={{
            background: "#f44336",
            borderRadius: "50%",
            padding: "2px 4px",
            fontSize: "1.5rem",
            cursor: "pointer",
            margin: "5 auto",
            alignItems: "right",
          }}
        />
        <Tooltip title="Edit">
          <Button
            variant="contained"
            onClick={() => dispatch({ type: actionTypes.EDIT, payload: id })}
          >
            <EditIcon />
          </Button>
        </Tooltip>
      </div>
        </>
  );
};
export default Todo;

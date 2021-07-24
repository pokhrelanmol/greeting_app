import React from "react";
import { actionTypes } from "./Todos.jsx";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AddTodo = ({ dispatch }) => {
  let [todo, setTodo] = React.useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Write Your List"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
  <Fab
       onClick={() => {
          dispatch({ type: actionTypes.ADD, payload: todo });
          setTodo("");
        }}
        color="primary" size ="small" aria-label="add">
        <AddIcon />
      </Fab>
    </>
  );
};
export default AddTodo;

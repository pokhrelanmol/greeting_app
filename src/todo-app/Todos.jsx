import uniqid from "uniqid";
import React from "react";
import Todo from "./Todo";
import Modal from "./Modal";
import { useReducer } from "react";
import AddTodo from "./AddTodo";
import GlobalMessage from "./GlobalMessage";
import LocalStorage  from "./LocalStorage";

const setDataToStorage = () => {
  
  let data = JSON.parse(localStorage.getItem('todos'))
  return data
}
  const initialState = {
  todos: setDataToStorage(),
  showdialog: false,
  edittodo: null,
  globalmessage: null,
};
export const actionTypes = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  ADD: "ADD_TODO",
  DELETE: "DELETE_TODO",
  EDIT: "EDIT_TODO",
  UPDATE: "UPDATE_TODO",
  TOGGLE: "TOGGLE_TODO",
  CLEAR_INFO: "CLEAR_INFO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      if (action.payload.length <= 0) {
        alert("Please Enter Todo");
      } else {
        

        const uniqId = uniqid()

        return {
          ...state,
          todos: [
            {
              id: uniqId,
              todo: action.payload,
              completed: false,
            },

            ...state.todos,
          ],
          globalMessage: `todo with id ${uniqId} Added successfully `,
        }
        
        }
    case actionTypes.TOGGLE:
      return {
        ...state,
        todos: state.todos.map((_todo) => {
          if (_todo.id === action.payload) {
            _todo.completed = !_todo.completed;
          }
          return _todo;
        }),
      };

    case actionTypes.DELETE:
      const editedTodos = [];
      for (let todo of state.todos) {
        if (todo.id !== action.payload) {
          editedTodos.push(todo);
        }
      }
      return {
        ...state,
        todos: editedTodos,
        globalMessage: `todo with id ${action.payload} Deleted successfully `,
      };

    case actionTypes.EDIT:
      let editTodo;
      for (let todo of state.todos) {
        if (todo.id === action.payload) {
          editTodo = todo;
        }
      }
      return {
        ...state,
        editTodo,
        showDialog: true,
      };

    case actionTypes.UPDATE:
      const { todo, id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((_todo) => {
          if (_todo.id === id) {
            _todo.todo = todo;
          }
          return _todo;
        }),
        showDialog: false,
        globalMessage: `todo with id ${id}  Updated successfully `,
      };

    case actionTypes.TOGGLE_MODAL:
      return { ...state, showDialog: !state.showDialog };

    case actionTypes.CLEAR_INFO:
      return { ...state, globalMessage: null };
    default:
      return state;
  }
};

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showDialog, editTodo, todos, globalMessage } = state;
  return (
    <div>
      <div className="main-div">
        <div className="center-div">
          <h1 className="heading-text">ToDo List</h1>
          {/*input field data from component */}
          <AddTodo dispatch={dispatch} />

          {todos.length > 0 ? (
            // Show todos
            <ol>
              {todos.map(({ todo, completed, id }) => (
                <Todo
                  key={id}
                  id={id}
                  completed={completed}
                  todo={todo}
                  dispatch={dispatch}
                />
              ))}
            </ol>
          ) : (
            <h3> you don't have any todos</h3>
          )}
        </div>
      </div>
      <GlobalMessage globalMessage={globalMessage} dispatch={dispatch} />
      <Modal editTodo={editTodo} dispatch={dispatch} showModal={showDialog} />
  <LocalStorage  todos ={todos} />
    </div>
  );
};

export default Todos;

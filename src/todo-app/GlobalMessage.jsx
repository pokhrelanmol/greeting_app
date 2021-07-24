import React, { useEffect } from "react";
import "./globalMessage.css";
import { actionTypes } from "./Todos";
export default function GlobalMessage({ globalMessage,dispatch}) {

    useEffect(() => {
      if (globalMessage) {
        setTimeout(() => {
          dispatch({ type: actionTypes.CLEAR_INFO })
        }, 3000);
      }
},[globalMessage,dispatch])

  if (globalMessage) {
    return (
      <div className="info-message">
        <div style={{ position: "relative"}}>
          <div>
            {globalMessage}
            <span
              style={{ color: "white", position: "absolute", top: "5px", right: "5px" }}
            >
              x
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

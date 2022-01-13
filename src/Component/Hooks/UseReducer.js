import React, { useEffect, useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCR":
      return state + 1;
    case "DECR":
      return state - 1 < 0 ? 0 : state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  const initialState = 15;
  //   const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;

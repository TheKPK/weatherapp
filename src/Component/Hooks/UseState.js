import React,{useEffect,useState} from "react";
import "./style.css";
const UseState = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    
    console.log('hi');
  }, []);

  return (
    <>
      <div className="center_div">
        <p>{counter}</p>
        <div className="button2" onClick={() => setCounter(counter + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          className="button2"
          onClick={() =>
            counter > 0 ? setCounter(counter - 1) : setCounter(0)
          }
        >
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

export default UseState;

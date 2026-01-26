import { useState } from "react";
import "./style.css";

export default function ToggleBox() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>Toggle Box</h1>
      <div className="container-btn">
        <button onClick={() => setShow(false)}>Hide</button>
        <button onClick={() => setShow(true)}>Show</button>
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div>
      {show && (
        <div className="box">
          <p>Hello Everyone!</p>
        </div>
      )}
    </div>
  );
}

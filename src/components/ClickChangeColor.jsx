import React, { useState } from "react";

const ClickChangeColor = () => {
  const [color, setColor] = useState("blue");
  const [bodyColor, setBodyColor] = useState();
  const Styles = {
    box: {
      width: "200px",
      height: "200px",
      backgroundColor: color,
      marginTop: "50px",
    },
  };

  document.body.style.backgroundColor = bodyColor;

  return (
    <div className="container">
      <h2>Interview Question 8, 10 and 11</h2>
      <div
        style={Styles.box}
        onClick={() => setColor(color == "blue" ? "crimson" : "blue")}
      ></div>
      <div style={{ marginTop: "50px" }}>
        <div style={{ margin: "25px" }}>
          <label htmlFor="input">
            <input
              type="radio"
              id="input"
              checked={bodyColor == "red"}
              value="red"
              onChange={(e) => setBodyColor(e.target.value)}
            />
            Red
          </label>
          <label htmlFor="input">
            <input
              type="radio"
              id="input"
              value="green"
              checked={bodyColor == "green"}
              onChange={(e) => setBodyColor(e.target.value)}
            />
            Green
          </label>
        </div>
        <button onClick={() => setBodyColor("red")}>Red</button>
        <button onClick={() => setBodyColor("green")}>Green</button>
      </div>
    </div>
  );
};

export default ClickChangeColor;

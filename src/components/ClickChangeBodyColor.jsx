import React, { useState } from "react";

const ClickChangeBodyColor = () => {
  const [color, setColor] = useState("crimson");
  const Styles = {
    fullScreen: {
      // width: "100vw",
      height: "100vh",
      backgroundColor: color,
      cursor: "pointer",
    },
  };

  document.body.style.background = color;

  return (
    <div
      style={Styles.fullScreen}
      onClick={() => setColor(color === "crimson" ? "blue" : "crimson")}
    >
      <div className="container">
        <h2>Interview Question 9</h2>
      </div>
    </div>
  );
};

export default ClickChangeBodyColor;

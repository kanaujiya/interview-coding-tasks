import { useState } from "react";

const SelectOptChangeColor = () => {
  const [bgColor, setBgColor] = useState("white");
  return (
    <div className="container">
      <select name="color" onChange={(e) => setBgColor(e.target.value)}>
        <option>Select Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <p style={{ color: bgColor === "white" ? "black" : bgColor }}>
        Hello World
      </p>
      <div
        style={{
          width: "200px",
          height: "200px",
          marginTop: "25px",
          border: "1px solid black",
          backgroundColor: bgColor, // Change the color here
        }}
      ></div>
    </div>
  );
};

export default SelectOptChangeColor;

import { useState } from "react";

const SelectOptChangeBodyColor = () => {
  const [color] = useState([
    { id: 1, color: "red" },
    { id: 4, color: "crimson" },
    { id: 2, color: "blue" },
    { id: 3, color: "green" },
  ]);
  
  const handleSetColor = (data) => {
    document.body.style.backgroundColor = data;
  };

  return (
    <div className="container">
      <h2>Interview Question 7</h2>
      <select name="color" onChange={(e) => handleSetColor(e.target.value)}>
        <option>Select Color</option>
        {color.map((c) => (
          <option key={c.id} value={c.color}>
            {c.color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptChangeBodyColor;

import React, { useState } from "react";

const CalculatorApp = () => {
  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [total, setTotal] = useState();

  const handleAddition = () => {
    if (firstNum != undefined && secondNum != undefined) {
      const total = Number(firstNum) + Number(secondNum);
      setTotal(total);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <p>Tatal: {total}</p>
      <input
        type="text"
        name="number"
        placeholder="Enter number"
        onChange={(e) => setFirstNum(e.target.value)}
      />
      <input
        type="text"
        name="number"
        placeholder="Enter number"
        onChange={(e) => setSecondNum(e.target.value)}
      />
      <button onClick={handleAddition}>Add</button>
    </div>
  );
};

export default CalculatorApp;
